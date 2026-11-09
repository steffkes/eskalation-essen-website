import Airtable from "airtable";
import * as z from "zod";

const required = z.string().trim().min(1).max(200);

const Schema = z.strictObject({
  name: required,
  email: z.email().max(200),
  phone: required,
  origin: required,
  // honeypot: hidden in the form, only bots fill it in
  website: z.string().optional(),
});

export default defineEventHandler(async (event) => {
  const result = Schema.safeParse(await readBody(event));

  if (!result.success) {
    setResponseStatus(event, 400);
    return { status: 400, message: z.treeifyError(result.error) };
  }

  const { website, ...data } = result.data;

  // pretend it worked, so bots don't retry
  if (website) {
    return setResponseStatus(event, 202);
  }

  try {
    await new Airtable()
      .base("appNZZJx2wyLsROCg")
      .table("tblkn6qNqYB98nImM")
      .create(data);

    return setResponseStatus(event, 202);
  } catch (error) {
    console.error({ error });
    setResponseStatus(event, 502);
    return { status: 502, message: "Could not save your data" };
  }
});
