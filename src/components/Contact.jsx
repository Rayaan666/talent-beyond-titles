import { useState } from 'react';

function FloatingInput({ label, type = 'text', isTextarea = false, ...props }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  const isActive = focused || value.length > 0;

  const base = `w-full bg-transparent py-3 focus:outline-none transition-colors duration-300 text-sm font-light`;
  const inputStyle = `${base} text-white border-b border-white/15 focus:border-accent-gold placeholder-transparent`;
  const labelStyle = `absolute left-0 transition-all duration-400 pointer-events-none font-light text-sm
    ${isActive ? '-top-5 text-[10px] text-accent-gold tracking-widest uppercase' : 'top-3 text-white/30'}`;

  return (
    <div className="relative mb-8">
      <label className={labelStyle}>{label}</label>
      {isTextarea ? (
        <textarea
          rows={3}
          className={`${inputStyle} resize-none`}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          {...props}
        />
      ) : (
        <input
          type={type}
          className={inputStyle}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          {...props}
        />
      )}
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative w-full flex flex-col lg:flex-row min-h-screen">
      {/* ── Strong Section Divider ── */}
      <div className="absolute top-0 left-0 right-0 flex flex-col items-stretch pointer-events-none z-20">
        <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent 0%, #B08D57 15%, #D3AF70 50%, #B08D57 85%, transparent 100%)' }} />
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent 5%, rgba(211,175,112,0.35) 25%, rgba(211,175,112,0.6) 50%, rgba(211,175,112,0.35) 75%, transparent 95%)' }} />
        <div style={{ height: '20px', background: 'linear-gradient(to bottom, rgba(211,175,112,0.08) 0%, transparent 100%)' }} />
      </div>

      {/* LEFT — dark glass panel: General Enquiries */}
      <div className="relative w-full lg:w-1/2 flex flex-col justify-start pt-16 pb-16 px-8 md:px-20 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5"
        style={{ background: '#050505' }}
      >
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(176,141,87,0.08) 0%, transparent 70%)' }}></div>

        {/* Fine grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)', backgroundSize: '50px 50px' }}></div>

        <div className="relative z-10 max-w-lg w-full mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-accent-gold"></div>
            <span className="text-accent-gold text-[10px] tracking-[0.3em] uppercase">Connect</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-light mb-2">
            General
          </h2>
          <h2 className="font-serif text-4xl md:text-5xl text-accent-gold italic font-light mb-10">
            Enquiries
          </h2>

          {/* Glass form */}
          <div className="relative p-8 md:p-10"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(20px)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.4)'
            }}
          >
            <FloatingInput label="Full Name" />
            <FloatingInput label="Email Address" type="email" />
            <FloatingInput label="Message" isTextarea />

            <button className="group relative mt-4 w-full py-4 text-[11px] tracking-[0.25em] uppercase font-medium overflow-hidden">
              <div className="absolute inset-0 border border-accent-gold/30 group-hover:border-accent-gold transition-colors duration-500"></div>
              <div className="absolute inset-0 bg-accent-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
              <span className="relative z-10 text-accent-gold group-hover:text-white transition-colors duration-500">Send Message</span>
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT — dark panel: Registration */}
      <div className="relative w-full lg:w-1/2 flex flex-col justify-start pt-16 pb-16 px-8 md:px-20 overflow-hidden"
        style={{ background: '#050505' }}
      >
        {/* Background tone */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(176,141,87,0.06) 0%, transparent 70%)' }}></div>

        <div className="relative z-10 max-w-lg w-full mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-accent-gold"></div>
            <span className="text-accent-gold text-[10px] tracking-[0.3em] uppercase">Participate</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-light mb-2">
            Participant
          </h2>
          <h2 className="font-serif text-4xl md:text-5xl text-accent-gold italic font-light mb-10">
            Registration
          </h2>

          <div>
            <div className="grid grid-cols-2 gap-x-8">
              <FloatingInput label="Full Name" />
              <FloatingInput label="Company" />
            </div>
            <div className="grid grid-cols-2 gap-x-8">
              <FloatingInput label="Department" />
              <div className="relative mb-8">
                <label className="absolute left-0 -top-5 text-[10px] text-accent-gold tracking-widest uppercase font-light">Category</label>
                <select defaultValue="" className="w-full bg-transparent border-b border-white/15 py-3 text-sm text-white/50 focus:outline-none focus:border-accent-gold transition-colors duration-300 appearance-none">
                  <option value="" disabled className="bg-primary-bg text-white">Select Category</option>
                  {['Singing','Dancing','Acting','Photography','Painting','Instrumental','Comedy','Poetry','Fashion','Innovation','Film','Magic','Open Talent'].map(c => (
                    <option key={c} value={c.toLowerCase()} className="bg-primary-bg text-white">{c}</option>
                  ))}
                </select>
                <svg className="absolute right-0 top-4 w-3.5 h-3.5 text-white/30 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-8">
              <FloatingInput label="Phone Number" type="tel" />
              <FloatingInput label="Email Address" type="email" />
            </div>

            {/* Upload */}
            <div className="mb-8 mt-2">
              <label className="block text-[10px] uppercase tracking-widest text-accent-gold mb-4 font-light">Upload Performance</label>
              <div className="border border-dashed border-white/15 py-8 px-6 text-center hover:border-accent-gold transition-colors duration-300 group cursor-pointer">
                <div className="w-8 h-8 mx-auto mb-3 border border-white/10 group-hover:border-accent-gold/50 flex items-center justify-center transition-colors duration-300">
                  <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                </div>
                <p className="text-white/40 text-xs font-light">Drag & drop or click to upload (Max 500MB)</p>
              </div>
            </div>

            <FloatingInput label="Additional Notes" isTextarea />

            <button className="group relative mt-4 w-full py-4 text-[11px] tracking-[0.25em] uppercase font-medium overflow-hidden">
              <div className="absolute inset-0 border border-accent-gold/30 group-hover:border-accent-gold transition-colors duration-500"></div>
              <div className="absolute inset-0 bg-accent-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
              <span className="relative z-10 text-accent-gold group-hover:text-white transition-colors duration-500">Submit Registration</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
