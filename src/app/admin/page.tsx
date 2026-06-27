"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap, Image, BookOpen, MessageSquare, Settings, Mail,
  Users, LogOut, BarChart3, Star, Download, Plus, Trash2, Eye
} from "lucide-react";

type Tab = "dashboard" | "admissions" | "gallery" | "programs" | "testimonials" | "enquiries" | "contacts" | "settings";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const tabs: { id: Tab; label: string; icon: typeof BarChart3 }[] = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "admissions", label: "Admissions", icon: Users },
    { id: "gallery", label: "Gallery", icon: Image },
    { id: "programs", label: "Programs", icon: BookOpen },
    { id: "testimonials", label: "Testimonials", icon: Star },
    { id: "enquiries", label: "Enquiries", icon: Mail },
    { id: "contacts", label: "Contacts", icon: MessageSquare },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-cream p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-text">Admin Login</h1>
            <p className="text-sm text-text-light">Sign in to manage your school</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }} className="space-y-4">
            <input type="email" placeholder="Email" required value={loginForm.email} onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" />
            <input type="password" placeholder="Password" required value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" />
            <button type="submit" className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-all shadow-md">Sign In</button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-cream pt-16">
      <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="flex items-center justify-between px-4 sm:px-6 h-16">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-7 h-7 text-primary" />
            <span className="font-bold text-text hidden sm:block">Admin Dashboard</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-text-light hidden sm:block">admin@scribbles.com</span>
            <button onClick={() => setIsLoggedIn(false)} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-warm-dark transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-50">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="hidden lg:flex flex-col w-64 min-h-[calc(100vh-4rem)] bg-white border-r border-gray-100 p-4 fixed left-0 top-16">
          <nav className="space-y-1 flex-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-primary text-white shadow-md"
                      : "text-text hover:bg-bg-soft"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 lg:ml-64 p-4 sm:p-6 lg:pt-6">
          <div className="flex lg:hidden gap-2 mb-6 overflow-x-auto pb-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? "bg-primary text-white"
                      : "bg-white text-text border border-gray-100"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-text">Dashboard Overview</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Total Admissions", value: "24", icon: Users, color: "bg-pastel-blue text-primary" },
                  { label: "New Enquiries", value: "8", icon: Mail, color: "bg-pastel-yellow text-secondary-dark" },
                  { label: "Gallery Images", value: "16", icon: Image, color: "bg-pastel-mint text-accent-dark" },
                  { label: "Testimonials", value: "12", icon: Star, color: "bg-pastel-pink text-warm-dark" },
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div key={stat.label} whileHover={{ y: -2 }} className={`${stat.color} rounded-2xl p-5`}>
                      <Icon className="w-6 h-6 mb-3" />
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm opacity-80">{stat.label}</p>
                    </motion.div>
                  );
                })}
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
                <h3 className="font-bold text-text mb-4">Recent Admissions</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-text-light border-b border-gray-100">
                        <th className="pb-3 font-medium">Child Name</th>
                        <th className="pb-3 font-medium">Program</th>
                        <th className="pb-3 font-medium">Parent</th>
                        <th className="pb-3 font-medium">Status</th>
                        <th className="pb-3 font-medium">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <tr key={i} className="hover:bg-bg-soft">
                          <td className="py-3 text-text">Child Name {i}</td>
                          <td className="py-3 text-text-light">LKG</td>
                          <td className="py-3 text-text">Parent {i}</td>
                          <td className="py-3"><span className="text-xs bg-star/20 text-star px-2 py-1 rounded-full font-medium">Pending</span></td>
                          <td className="py-3 text-text-light">Jun {i}, 2026</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "admissions" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-text">Admissions</h2>
                <button className="flex items-center gap-1.5 bg-success text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-accent-dark transition-all">
                  <Download className="w-4 h-4" /> Export
                </button>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-bg-soft">
                      <tr className="text-left text-text-light">
                        {["Child", "Program", "Parent", "Phone", "Email", "Status", "Date", "Actions"].map((h) => (
                          <th key={h} className="p-3 font-medium whitespace-nowrap">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {[{ child: "Aarav Sharma", program: "LKG", parent: "Priya Sharma", phone: "+91 98765 43210", email: "priya@email.com", status: "Pending", date: "25 Jun 2026" },
                        { child: "Myra Reddy", program: "Nursery", parent: "Rajesh Reddy", phone: "+91 87654 32109", email: "rajesh@email.com", status: "Approved", date: "24 Jun 2026" },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-bg-soft">
                          <td className="p-3 font-medium text-text">{row.child}</td>
                          <td className="p-3 text-text-light">{row.program}</td>
                          <td className="p-3 text-text">{row.parent}</td>
                          <td className="p-3 text-text-light">{row.phone}</td>
                          <td className="p-3 text-text-light">{row.email}</td>
                          <td className="p-3">
                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                              row.status === "Approved" ? "bg-success/20 text-accent-dark" : "bg-star/20 text-star"
                            }`}>{row.status}</span>
                          </td>
                          <td className="p-3 text-text-light">{row.date}</td>
                          <td className="p-3">
                            <div className="flex gap-2">
                              <button className="p-1.5 rounded-lg hover:bg-bg-soft text-primary"><Eye className="w-4 h-4" /></button>
                              <button className="p-1.5 rounded-lg hover:bg-bg-soft text-warm-dark"><Trash2 className="w-4 h-4" /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "gallery" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-text">Gallery Management</h2>
                <button className="flex items-center gap-1.5 bg-primary text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-primary-dark transition-all">
                  <Plus className="w-4 h-4" /> Add Image
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="relative group aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-pastel-blue to-pastel-yellow">
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30"><Eye className="w-4 h-4 text-white" /></button>
                      <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30"><Trash2 className="w-4 h-4 text-warm-dark" /></button>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="text-xs bg-white/80 text-text px-2 py-1 rounded-full">Classroom</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "enquiries" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-text">Enquiries</h2>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden">
                <div className="divide-y divide-gray-50">
                  {[
                    { name: "Anita Kumar", email: "anita@email.com", phone: "+91 98765 43210", message: "Interested in nursery program", date: "Just now" },
                    { name: "Vijay Nair", email: "vijay@email.com", phone: "+91 87654 32109", message: "Please share fee details for LKG", date: "2 hours ago" },
                  ].map((e, i) => (
                    <div key={i} className="p-4 hover:bg-bg-soft transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-text">{e.name}</span>
                            <span className="text-xs text-text-light">{e.date}</span>
                          </div>
                          <p className="text-sm text-text-light mb-1">{e.message}</p>
                          <div className="flex gap-3 text-xs text-text-light">
                            <span>{e.email}</span>
                            <span>{e.phone}</span>
                          </div>
                        </div>
                        <button className="shrink-0 p-1.5 rounded-lg hover:bg-bg-soft text-warm-dark"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "contacts" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-text">Contact Messages</h2>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden">
                <div className="divide-y divide-gray-50">
                  {[
                    { name: "Sunil Verma", email: "sunil@email.com", message: "Would like to schedule a visit to the school", date: "1 day ago" },
                  ].map((c, i) => (
                    <div key={i} className="p-4 hover:bg-bg-soft transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-text">{c.name}</span>
                            <span className="text-xs text-text-light">{c.date}</span>
                          </div>
                          <p className="text-sm text-text-light">{c.message}</p>
                          <p className="text-xs text-text-light mt-1">{c.email}</p>
                        </div>
                        <button className="shrink-0 p-1.5 rounded-lg hover:bg-bg-soft text-warm-dark"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {(activeTab === "programs" || activeTab === "testimonials" || activeTab === "settings") && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-text capitalize">{activeTab}</h2>
                <button className="flex items-center gap-1.5 bg-primary text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-primary-dark transition-all">
                  <Plus className="w-4 h-4" /> Add New
                </button>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-50 text-center">
                <p className="text-text-light">Manage your {activeTab} content here.</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
