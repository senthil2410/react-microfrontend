export const getErrorMessage = (err: unknown): string => {
  if (err instanceof Error) {
    return err.message;
  }

  if (typeof err === "string") {
    return err;
  }

  if (typeof err === "object" && err !== null) {
    if ("message" in err && typeof (err as any).message === "string") {
      return (err as any).message;
    }
    return JSON.stringify(err);
  }

  return "Something Went Wrong";
};
