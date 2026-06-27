"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Newsletter from "@/components/Newsletter";
import { SCHOOL } from "@/lib/constants";
import { Send, Check, GraduationCap, Phone, Mail, FileText } from "lucide-react";

const initialForm = {
  childName: "", dob: "", ageGroup: "", gender: "",
  parentName: "", relation: "", email: "", phone: "", alternatePhone: "",
  address: "", city: "", pincode: "",
  heardAbout: "", message: "",
};

export default function AdmissionsPage() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  const update = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData(initialForm); setStep(1); }, 3000);
  };

  return (
    <>
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-pastel-blue via-white to-pastel-mint overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-text mb-4"
          >
            <span className="text-primary">Admissions</span> Open
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-light max-w-2xl mx-auto"
          >
            Give your child the best start in life. Apply for admission to Scribbles International PreSchool.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              { num: 1, label: "Student Details", icon: GraduationCap },
              { num: 2, label: "Parent Information", icon: FileText },
              { num: 3, label: "Submit Application", icon: Send },
            ].map((s) => (
              <button
                key={s.num}
                onClick={() => setStep(s.num)}
                className={`flex items-center gap-3 p-4 rounded-2xl transition-all ${
                  step === s.num
                    ? "bg-primary text-white shadow-lg"
                    : step > s.num
                    ? "bg-success/10 text-success"
                    : "bg-bg-soft text-text-light"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  step === s.num ? "bg-white/20" : step > s.num ? "bg-success/20" : "bg-white"
                }`}>
                  {step > s.num ? <Check className="w-5 h-5" /> : <s.icon className="w-5 h-5" />}
                </div>
                <span className="font-medium text-sm">{s.label}</span>
              </button>
            ))}
          </div>

          <div className="bg-bg-soft rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-50">
            {submitted ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-10 h-10 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-text mb-2">Application Submitted!</h3>
                <p className="text-text-light mb-2">Thank you for applying to {SCHOOL.name}.</p>
                <p className="text-text-light text-sm">We will contact you within 48 hours for the next steps.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <AnimatedSection>
                    <h2 className="text-xl font-bold text-text mb-6">Student Details</h2>
                    <div className="space-y-4">
                      <input type="text" placeholder="Child's Full Name *" required value={formData.childName} onChange={(e) => update("childName", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" />
                      <div className="grid sm:grid-cols-2 gap-4">
                        <input type="date" placeholder="Date of Birth *" required value={formData.dob} onChange={(e) => update("dob", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" />
                        <select value={formData.ageGroup} onChange={(e) => update("ageGroup", e.target.value)} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm">
                          <option value="">Select Program *</option>
                          <option value="play-group">Play Group (1.5 - 2.5 yrs)</option>
                          <option value="nursery">Nursery (2.5 - 3.5 yrs)</option>
                          <option value="pre-kg">Pre-KG (3.5 - 4.5 yrs)</option>
                          <option value="lkg">LKG (4.5 - 5.5 yrs)</option>
                          <option value="ukg">UKG (5.5 - 6.5 yrs)</option>
                        </select>
                      </div>
                      <div className="flex gap-4">
                        {["Male", "Female", "Other"].map((g) => (
                          <label key={g} className={`flex items-center gap-2 px-4 py-3 rounded-xl border cursor-pointer transition-all text-sm ${
                            formData.gender === g ? "border-primary bg-primary/5 text-primary" : "border-gray-200 hover:border-gray-300"
                          }`}>
                            <input type="radio" name="gender" value={g} checked={formData.gender === g} onChange={(e) => update("gender", e.target.value)} className="sr-only" />
                            {g}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-end mt-6">
                      <button type="button" onClick={() => setStep(2)} className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-all">Next Step</button>
                    </div>
                  </AnimatedSection>
                )}

                {step === 2 && (
                  <AnimatedSection>
                    <h2 className="text-xl font-bold text-text mb-6">Parent / Guardian Information</h2>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <input type="text" placeholder="Parent/Guardian Name *" required value={formData.parentName} onChange={(e) => update("parentName", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" />
                        <select value={formData.relation} onChange={(e) => update("relation", e.target.value)} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm">
                          <option value="">Relation to Child *</option>
                          <option value="father">Father</option>
                          <option value="mother">Mother</option>
                          <option value="guardian">Guardian</option>
                        </select>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <input type="email" placeholder="Email Address *" required value={formData.email} onChange={(e) => update("email", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" />
                        <input type="tel" placeholder="Phone Number *" required value={formData.phone} onChange={(e) => update("phone", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" />
                      </div>
                      <input type="tel" placeholder="Alternate Phone Number" value={formData.alternatePhone} onChange={(e) => update("alternatePhone", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" />
                      <textarea placeholder="Residential Address *" required rows={2} value={formData.address} onChange={(e) => update("address", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none" />
                      <div className="grid sm:grid-cols-2 gap-4">
                        <input type="text" placeholder="City *" required value={formData.city} onChange={(e) => update("city", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" />
                        <input type="text" placeholder="Pincode" value={formData.pincode} onChange={(e) => update("pincode", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" />
                      </div>
                    </div>
                    <div className="flex justify-between mt-6">
                      <button type="button" onClick={() => setStep(1)} className="px-8 py-3 rounded-xl font-semibold border border-gray-200 hover:bg-gray-50 transition-all">Previous</button>
                      <button type="button" onClick={() => setStep(3)} className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-all">Next Step</button>
                    </div>
                  </AnimatedSection>
                )}

                {step === 3 && (
                  <AnimatedSection>
                    <h2 className="text-xl font-bold text-text mb-6">Final Step</h2>
                    <div className="space-y-4">
                      <select value={formData.heardAbout} onChange={(e) => update("heardAbout", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm">
                        <option value="">How did you hear about us?</option>
                        <option value="google">Google Search</option>
                        <option value="facebook">Facebook / Instagram</option>
                        <option value="friend">Friend / Family</option>
                        <option value="walk-in">Walk-in</option>
                        <option value="other">Other</option>
                      </select>
                      <textarea placeholder="Any additional message or questions?" rows={3} value={formData.message} onChange={(e) => update("message", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none" />
                    </div>
                    <div className="flex justify-between mt-6">
                      <button type="button" onClick={() => setStep(2)} className="px-8 py-3 rounded-xl font-semibold border border-gray-200 hover:bg-gray-50 transition-all">Previous</button>
                      <button type="submit" className="bg-success text-white px-8 py-3 rounded-xl font-semibold hover:bg-accent-dark transition-all shadow-md flex items-center gap-2">
                        <Send className="w-4 h-4" /> Submit Application
                      </button>
                    </div>
                  </AnimatedSection>
                )}
              </form>
            )}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            <a href={`tel:${SCHOOL.phone}`} className="flex items-center gap-3 p-4 bg-pastel-blue rounded-2xl hover:shadow-md transition-all">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-semibold text-text">Call us</p>
                <p className="text-sm text-text-light">{SCHOOL.phone}</p>
              </div>
            </a>
            <a href={`mailto:${SCHOOL.email}`} className="flex items-center gap-3 p-4 bg-pastel-mint rounded-2xl hover:shadow-md transition-all">
              <Mail className="w-5 h-5 text-accent-dark" />
              <div>
                <p className="text-sm font-semibold text-text">Email us</p>
                <p className="text-sm text-text-light">{SCHOOL.email}</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
