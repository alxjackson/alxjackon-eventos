import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import ImageUpload from "../ImageUpload";

describe("ImageUpload", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders with default props", () => {
    const { getByLabelText } = render(<ImageUpload />);
    expect(getByLabelText("Upload image")).toBeInTheDocument();
  });

  it("handles file upload correctly", () => {
    const onUpload = vi.fn();
    const { getByLabelText } = render(<ImageUpload onUpload={onUpload} />);

    const file = new File(["test"], "test.png", { type: "image/png" });
    const input = getByLabelText("Upload image") as HTMLInputElement;

    fireEvent.change(input, { target: { files: [file] } });
    expect(onUpload).toHaveBeenCalledWith(file);
  });
});
