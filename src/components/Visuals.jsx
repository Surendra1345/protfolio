// Illustrative mock-ups drawn in CSS, one per project. They show what each
// project does; swap them for real screenshots whenever you have them.

export function IClinicVisual() {
  return (
    <div className="window">
      <div className="window-bar"><i /><i /><i /><span>iClinic · Front desk</span></div>
      <div className="chat">
        <p className="bubble user">Hi, I need to see Dr. Rao tomorrow morning.</p>
        <p className="bubble bot">Sure. I can hold <b>10:30 AM</b> at the Indiranagar branch. Can you confirm your phone number?</p>
        <p className="bubble user">Yes, ending 3283.</p>
        <p className="bubble bot ok">Identity verified. Appointment booked. A confirmation email is on its way.</p>
      </div>
      <div className="chips"><span>Chat</span><span>Voice</span><span>Phone calls</span></div>
    </div>
  )
}

export function FarmaVisual() {
  const sides = [
    { name: 'Farmers', note: 'List produce' },
    { name: 'Buyers', note: 'Order direct' },
    { name: 'Storage', note: 'Book space' },
    { name: 'Machinery', note: 'Rent equipment' },
  ]
  return (
    <div className="window">
      <div className="window-bar"><i /><i /><i /><span>Farma Bridge · Marketplace</span></div>
      <div className="tiles">
        {sides.map((s, n) => (
          <div className={`tile t${n}`} key={s.name}>
            <b>{s.name}</b>
            <span>{s.note}</span>
          </div>
        ))}
      </div>
      <div className="bars"><i style={{ width: '82%' }} /><i style={{ width: '64%' }} /><i style={{ width: '48%' }} /></div>
    </div>
  )
}

export function WatermarkVisual() {
  const steps = [
    { label: 'Original', cls: 'img-a' },
    { label: 'Watermarked', cls: 'img-b' },
    { label: 'Extracted', cls: 'img-c' },
  ]
  return (
    <div className="window">
      <div className="window-bar"><i /><i /><i /><span>Encoder → Decoder</span></div>
      <div className="wm">
        {steps.map((s, n) => (
          <div key={s.label} className="wm-step">
            <div className={`wm-img ${s.cls}`} />
            <span>{s.label}</span>
            {n < steps.length - 1 && <em>→</em>}
          </div>
        ))}
      </div>
      <div className="chips"><span>PSNR</span><span>SSIM</span><span>Compression</span><span>Noise</span></div>
    </div>
  )
}

export const visuals = { iclinic: IClinicVisual, farma: FarmaVisual, watermark: WatermarkVisual }
