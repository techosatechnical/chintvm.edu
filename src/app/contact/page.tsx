import PageHeader from "@/components/shared/PageHeader";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        description="Get in touch with the Chinmaya Educational, Cultural and Charitable Trust." 
        bannerImage="/Contact banner.png"
      />

      <section className="py-20 bg-gradient-to-b from-[#F9F6F7] via-[#FFE8D6]/30 to-[#F9F6F7] min-h-[70vh]">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#FFE8D6] text-[#FF971D] text-xs font-bold tracking-widest uppercase rounded-full mb-3 border border-[#FF971D]/20">
              Connect With Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-navy tracking-tight">
              Get in <span className="text-[#FF971D]">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-[#FF971D] mx-auto rounded-full mt-4"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
            <div className="grid lg:grid-cols-3">
              {/* Info and Form */}
              <div className="p-8 lg:p-12 lg:col-span-2 flex flex-col justify-center">
                <h3 className="font-heading text-2xl font-bold text-navy mb-6">Send us a Message</h3>
                <form className="space-y-4 mb-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#FF971D] focus:border-[#FF971D] outline-none transition-all bg-[#F9F6F7] text-slate-800" 
                        placeholder="Full Name" 
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#FF971D] focus:border-[#FF971D] outline-none transition-all bg-[#F9F6F7] text-slate-800" 
                        placeholder="Email Address" 
                      />
                    </div>
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#FF971D] focus:border-[#FF971D] outline-none transition-all bg-[#F9F6F7] text-slate-800" 
                      placeholder="Phone Number" 
                    />
                  </div>
                  <div>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#FF971D] focus:border-[#FF971D] outline-none transition-all bg-[#F9F6F7] text-slate-800" 
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button 
                    type="button" 
                    className="w-full md:w-auto px-9 bg-[#FF971D] hover:bg-[#e68412] text-white font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    Submit Message
                  </button>
                </form>

                <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[#FF971D] shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-navy mb-1 text-sm">Registered Office</h4>
                      <p className="text-slate-600 text-xs">Vazhuthacaud, Trivandrum - 695010</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[#FF971D] shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-navy mb-1 text-sm">Headquarters</h4>
                      <p className="text-slate-600 text-xs">Chinmaya Padmanabha, Manacaud - 695009</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-[#FF971D] shrink-0" />
                    <p className="text-slate-600 font-medium text-xs">0471 2451533 / 2452033</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-[#FF971D] shrink-0" />
                    <a href="mailto:chintvm@gmail.com" className="text-slate-600 font-medium text-xs hover:text-[#FF971D] transition-colors">
                      chintvm@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="lg:col-span-1 h-[320px] lg:h-auto w-full bg-slate-100 relative min-h-[300px]">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31569.006821889143!2d76.94030568739949!3d8.487142309455777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb1a9b651d7f%3A0x1d37db272af32bac!2sChinmaya+Vidyalaya!5e0!3m2!1sen!2sin!4v1532156851077"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}