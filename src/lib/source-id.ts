import "server-only";
import { cookies } from "next/headers";
import { v4 as uuid } from "uuid";

const SOURCE_ID_KEY = "sourceId";

export const setSourceId = async () => {
  const cookiesStore = await cookies();

  let sourceId = cookiesStore.get(SOURCE_ID_KEY)?.value;
  if (!sourceId) {
    sourceId = uuid();
    cookiesStore.set(SOURCE_ID_KEY, sourceId, {
      path: "/",
    });
  }
  return sourceId;
};

export const getSourceId = async () => {
  const cookiesStore = await cookies();
  return cookiesStore.get(SOURCE_ID_KEY)?.value;
};
