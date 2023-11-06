import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../../../../../assets";
import { getRandomPrompt } from "../../../utils/getRandomPrompt.ts";
import {
  // useAppSelector,
  useAppDispatch,
} from "../../../../../../../table-test/src/store/reduxHooks.ts";
import { FormField } from "../FormField/FormField.tsx";
import { Loader } from "../general/Loader.tsx";
import { url } from "../../../config/constant.ts";
import { createImg } from "../../../../../store/rootReducer.ts";

export const CreatePost = () => {
  const navigate = useNavigate();
  // const state = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onCLick = () => {
    dispatch(createImg({ id: "sd", image: "lol", prompt: "crate img" }));
  };
  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch(`${url}/dalle`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: form.prompt,
          }),
        });
        console.log(response);
        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (err) {
        alert(err);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert("Please provide proper prompt");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch(`${url}/post`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...form }),
        });

        await response.json();
        navigate("/");
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please generate an image with proper details");
    }
  };

  return (
    <section>
      <div>
        <h1>Create</h1>
        <p>
          Generate an imaginative image through DALL-E AI and share it with the
          community
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Ex., john doe"
            value={form.name}
            onChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
            value={form.prompt}
            onChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div>
            {form.photo ? (
              <img src={form.photo} alt={form.prompt} />
            ) : (
              <img src={preview} alt="preview" />
            )}

            {generatingImg && (
              <div>
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div>
          <button type="button" onClick={generateImage}>
            {generatingImg ? "Generating..." : "Generate"}
          </button>
        </div>
        <div className="mt-10">
          <p>
            ** Once you have created the image you want, you can share it with
            others in the community **
          </p>
          <button type="submit">
            {loading ? "Sharing..." : "Share with the Community"}
          </button>
        </div>
      </form>
      <button onClick={onCLick}>X</button>
    </section>
  );
};
