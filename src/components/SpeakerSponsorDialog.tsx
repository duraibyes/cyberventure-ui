import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  type: "speaker" | "sponsor";
}

export default function SpeakerSponsorDialog({ open, onClose, type }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    overview: "",
    profile: "",
    linkedin: "",
  });

  const [errors, setErrors] = useState<any>({});

  if (!open) return null;

  const validate = () => {
    const newErrors: any = {};

    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email format";
    if (!form.phone) newErrors.phone = "Phone number is required";
    if (type === "speaker" && !form.topic)
      newErrors.topic = "Session topic is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    console.log("Form Submitted", form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Dialog */}
      <div className="relative w-full max-w-2xl mx-4 
                      backdrop-blur-xl bg-white/90 
                      border border-orange-400/40 
                      rounded-3xl shadow-[0_25px_60px_rgba(249,115,22,0.3)] 
                      p-8 overflow-y-auto max-h-[90vh]">

        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {type === "speaker" ? "Apply as Speaker" : "Partner With Us"}
        </h2>

        <div className="grid grid-cols-1 gap-5">

          <Input label="Full Name" name="name" form={form} setForm={setForm} error={errors.name} />
          <Input label="Email Address" name="email" form={form} setForm={setForm} error={errors.email} />
          <Input label="Phone Number" name="phone" form={form} setForm={setForm} error={errors.phone} />

          {type === "speaker" && (
            <>
              <Input label="Session Topic" name="topic" form={form} setForm={setForm} error={errors.topic} />
              <Textarea label="Session Overview" name="overview" form={form} setForm={setForm} />
            </>
          )}

          <Textarea label="Speaker Profile / Company Profile" name="profile" form={form} setForm={setForm} />
          <Input label="LinkedIn Profile Link" name="linkedin" form={form} setForm={setForm} />

        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={onClose}
            className="px-6 py-3 border border-gray-400 rounded-xl text-gray-700 hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 
                       text-white rounded-xl font-semibold 
                       hover:scale-105 transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Reusable Input ---------- */

function Input({ label, name, form, setForm, error }: any) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-800 mb-1">
        {label}
      </label>
      <input
        type="text"
        value={form[name]}
        onChange={(e) =>
          setForm({ ...form, [name]: e.target.value })
        }
        className={`w-full px-4 py-3 rounded-xl 
                    bg-white backdrop-blur-md 
                    border ${error ? "border-red-500" : "border-orange-300/40"} 
                    focus:outline-none focus:ring-2 focus:ring-orange-400`}
      />
      {error && (
        <p className="text-red-600 text-sm mt-1">{error}</p>
      )}
    </div>
  );
}

/* ---------- Reusable Textarea ---------- */

function Textarea({ label, name, form, setForm }: any) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-800 mb-1">
        {label}
      </label>
      <textarea
        rows={4}
        value={form[name]}
        onChange={(e) =>
          setForm({ ...form, [name]: e.target.value })
        }
        className="w-full px-4 py-3 rounded-xl 
                   bg-white/40 backdrop-blur-md 
                   border border-orange-300/40 
                   focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>
  );
}