import { Vitest, expect } from "vitest";
import createPost from "./posthook.js";

data = {
  title: "test1",
  content: "test2",
};
expect(createPost(data)).toEqual("Success:");
