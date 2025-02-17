import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ProgressSlider from "./ProgressSlider";
import { FaCloudUploadAlt, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TicketGenerator = () => {
  const [page, setPage] = useState(2);
  const totalPages = 3;
  const navigate = useNavigate();

  // Retrieve saved data from localStorage
  const savedData = JSON.parse(localStorage.getItem("ticketData")) || {};
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: savedData,
  });

  const [preview, setPreview] = useState(""); // For image preview
  const fileInputRef = useRef(null);

  // Only reset on mount
  useEffect(() => {
    reset(savedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
    // Save updated data to localStorage
    localStorage.setItem("ticketData", JSON.stringify(data));

    // Optionally, wait a moment to ensure localStorage is updated
    setTimeout(() => {
      navigate("/about");
    }, 50);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Update form data and local preview
        setValue("image", reader.result);
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="ticket">
      <div>
        <div className="selection">
          <h2>Attendee Details</h2>
          <h6>
            Step {page}/{totalPages}
          </h6>
        </div>
        <div style={{ width: "90%", margin: "0 auto", textAlign: "center" }}>
          <ProgressSlider page={page} totalPages={totalPages} />
        </div>
        <div className="container">
          <h5>Upload Profile Photo</h5>
          <div
            className="picture-container"
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
            style={{
              cursor: "pointer",
              border: "2px dashed #ccc",
              padding: "1rem",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <FaCloudUploadAlt size={40} />
            <h2>Drag & drop or click to upload</h2>
            {preview && (
              <img
                src={preview}
                alt="Preview"
                style={{
                  marginTop: "1rem",
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                }}
              />
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
          {/* Hidden input for image field */}
          <input type="hidden" {...register("image")} />
          <div className="ticket-container">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="form-group">
                <label htmlFor="fullName">Enter your name</label>
                <br />
                <input
                  id="fullName"
                  type="text"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  aria-invalid={errors.fullName ? "true" : "false"}
                />
                {errors.fullName && (
                  <span role="alert" className="error">
                    {errors.fullName.message}
                  </span>
                )}
              </div>
              <div className="form-group">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaEnvelope />
                  <label htmlFor="email" style={{ marginLeft: "0.5rem" }}>
                    Email
                  </label>
                </div>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <span role="alert" className="error">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="request">Special request?</label>
                <br />
                <textarea id="request" {...register("request")} />
              </div>
              <div className="buttons">
                <button
                  type="button"
                  className="submit-button next"
                  onClick={() => navigate("/")}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="submit-button"
                  onClick={() => navigate("/about")}
                >
                  Get My Free Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketGenerator;
