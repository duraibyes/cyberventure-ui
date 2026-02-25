import { useState } from "react";

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function MemberRegistrationDialog({ open, onClose }: Props) {
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        linked_in: "",

    });

    const [errors, setErrors] = useState<any>({});

    if (!open) return null;

    const validate = () => {
        const newErrors: any = {};

        if (!form.first_name) newErrors.first_name = "First name is required";
        if (!form.last_name) newErrors.last_name = "Last name is required";
        if (!/\S+@\S+\.\S+/.test(form.email))
            newErrors.email = "Invalid email format";
        if (!form.linked_in) newErrors.linked_in = "LinkedIn profile is required";

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

            <div className="relative w-full max-w-2xl mx-4 
                      backdrop-blur-xl bg-white/90 
                      border border-orange-400/40 
                      rounded-3xl shadow-[0_25px_60px_rgba(249,115,22,0.3)] 
                      p-8 overflow-y-auto max-h-[90vh]">

                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Member Registration
                </h2>

                <div className="grid grid-cols-1 gap-5">
                    <Input label="First Name" name="first_name" form={form} setForm={setForm} error={errors.first_name} />
                    <Input label="Last Name" name="last_name" form={form} setForm={setForm} error={errors.last_name} />
                    <Input label="Email Address" name="email" form={form} setForm={setForm} error={errors.email} />
                    <Input label="LinkedIn Profile" name="linked_in" form={form} setForm={setForm} error={errors.linked_in} />
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
