"use client"

import { useEffect, useRef } from "react"

export function HeroBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    let t = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Stars
    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.2 + 0.1,
      o: Math.random() * 0.6 + 0.1,
      ts: Math.random() * 1.5 + 0.5,
      to: Math.random() * Math.PI * 2,
    }))

    function drawStars(W: number, H: number) {
      stars.forEach((s) => {
        const tw = s.o * (0.3 + 0.7 * Math.abs(Math.sin(t * s.ts + s.to)))
        ctx!.beginPath()
        ctx!.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(255,255,255,${tw})`
        ctx!.fill()
      })
    }

    // Left purple + right cyan edge glows
    function drawEdgeGlows(W: number, H: number) {
      const lg = ctx!.createRadialGradient(0, H * 0.4, 0, 0, H * 0.4, W * 0.4)
      lg.addColorStop(0, "rgba(130,30,255,0.28)")
      lg.addColorStop(0.6, "rgba(100,20,200,0.10)")
      lg.addColorStop(1, "transparent")
      ctx!.fillStyle = lg
      ctx!.fillRect(0, 0, W, H)

      const rg = ctx!.createRadialGradient(W, H * 0.4, 0, W, H * 0.4, W * 0.35)
      rg.addColorStop(0, "rgba(0,200,255,0.20)")
      rg.addColorStop(0.6, "rgba(0,150,220,0.08)")
      rg.addColorStop(1, "transparent")
      ctx!.fillStyle = rg
      ctx!.fillRect(0, 0, W, H)
    }

    // Big circular halo ring behind the person — the dominant feature in the reference
    function drawHaloRing(W: number, H: number) {
      // Center it at right-center where the person stands
      const cx = W * 0.65
      const cy = H * 0.45
      const r = Math.min(W, H) * 0.32
      const pulse = 0.85 + 0.15 * Math.sin(t * 0.7)

      // Outer soft glow
      const outerGlow = ctx!.createRadialGradient(cx, cy, r * 0.7, cx, cy, r * 1.4)
      outerGlow.addColorStop(0, "transparent")
      outerGlow.addColorStop(0.5, `rgba(220,80,255,${0.06 * pulse})`)
      outerGlow.addColorStop(0.8, `rgba(180,60,255,${0.04 * pulse})`)
      outerGlow.addColorStop(1, "transparent")
      ctx!.fillStyle = outerGlow
      ctx!.beginPath()
      ctx!.arc(cx, cy, r * 1.4, 0, Math.PI * 2)
      ctx!.fill()

      // Wide soft ring band
      ctx!.beginPath()
      ctx!.arc(cx, cy, r, 0, Math.PI * 2)
      ctx!.strokeStyle = `rgba(220,80,255,${0.15 * pulse})`
      ctx!.lineWidth = 28
      ctx!.stroke()

      // Mid ring
      ctx!.beginPath()
      ctx!.arc(cx, cy, r, 0, Math.PI * 2)
      ctx!.strokeStyle = `rgba(210,80,255,${0.55 * pulse})`
      ctx!.lineWidth = 3
      ctx!.shadowBlur = 25
      ctx!.shadowColor = "#cc40ff"
      ctx!.stroke()
      ctx!.shadowBlur = 0

      // Inner bright ring
      ctx!.beginPath()
      ctx!.arc(cx, cy, r * 0.97, 0, Math.PI * 2)
      ctx!.strokeStyle = `rgba(255,130,255,${0.30 * pulse})`
      ctx!.lineWidth = 1.5
      ctx!.shadowBlur = 8
      ctx!.shadowColor = "#ff80ff"
      ctx!.stroke()
      ctx!.shadowBlur = 0
    }

    // Orbit ellipses around the figure
    const orbits = [
      { rx: 0.28, ry: 0.09, cx: 0.65, cy: 0.46, tilt: -0.28, color: "#a855f7", lw: 1.8, phase: 0.0 },
      { rx: 0.36, ry: 0.11, cx: 0.65, cy: 0.46, tilt: -0.22, color: "#06b6d4", lw: 1.4, phase: 1.2 },
      { rx: 0.44, ry: 0.14, cx: 0.65, cy: 0.46, tilt: -0.16, color: "#818cf8", lw: 1.0, phase: 2.4 },
      { rx: 0.20, ry: 0.07, cx: 0.65, cy: 0.46, tilt: -0.38, color: "#e879f9", lw: 1.2, phase: 3.6 },
    ]

    function drawOrbits(W: number, H: number) {
      orbits.forEach(({ rx, ry, cx, cy, tilt, color, lw, phase }) => {
        const pulse = 0.55 + 0.45 * Math.sin(t * 0.5 + phase)
        ctx!.save()
        ctx!.translate(cx * W, cy * H)
        ctx!.rotate(tilt)
        ctx!.beginPath()
        ctx!.ellipse(0, 0, rx * W, ry * H, 0, 0, Math.PI * 2)
        ctx!.strokeStyle = color
        ctx!.globalAlpha = 0.6 * pulse
        ctx!.lineWidth = lw
        ctx!.shadowBlur = 12
        ctx!.shadowColor = color
        ctx!.stroke()
        ctx!.shadowBlur = 0
        ctx!.globalAlpha = 1
        ctx!.restore()
      })
    }

    function drawOrbitDots(W: number, H: number) {
      orbits.forEach(({ rx, ry, cx, cy, tilt, color, phase }) => {
        const angle = t * 0.5 + phase
        ctx!.save()
        ctx!.translate(cx * W, cy * H)
        ctx!.rotate(tilt)
        const dx = rx * W * Math.cos(angle)
        const dy = ry * H * Math.sin(angle)
        ctx!.beginPath()
        ctx!.arc(dx, dy, 4, 0, Math.PI * 2)
        ctx!.fillStyle = color
        ctx!.shadowBlur = 18
        ctx!.shadowColor = color
        ctx!.fill()
        ctx!.shadowBlur = 0
        ctx!.restore()
      })
    }

    // Earth at bottom-center — large, with city lights
    function drawEarth(W: number, H: number) {
      const cx = W * 0.42
      const cy = H * 1.10
      const r = W * 0.26

      // Wide outer atmosphere glow
      const atm = ctx!.createRadialGradient(cx, cy, r * 0.4, cx, cy, r * 1.6)
      atm.addColorStop(0, "transparent")
      atm.addColorStop(0.5, "rgba(0,120,255,0.10)")
      atm.addColorStop(0.75, "rgba(0,180,255,0.08)")
      atm.addColorStop(1, "transparent")
      ctx!.fillStyle = atm
      ctx!.beginPath()
      ctx!.arc(cx, cy, r * 1.6, 0, Math.PI * 2)
      ctx!.fill()

      // Globe body
      const g = ctx!.createRadialGradient(cx - r * 0.3, cy - r * 0.3, r * 0.04, cx, cy, r)
      g.addColorStop(0, "rgba(20,50,160,0.95)")
      g.addColorStop(0.35, "rgba(10,20,80,0.97)")
      g.addColorStop(0.7, "rgba(5,10,30,0.98)")
      g.addColorStop(1, "rgba(0,180,255,0.25)")
      ctx!.beginPath()
      ctx!.arc(cx, cy, r, 0, Math.PI * 2)
      ctx!.fillStyle = g
      ctx!.fill()

      // City lights
      ctx!.save()
      ctx!.beginPath()
      ctx!.arc(cx, cy, r, 0, Math.PI * 2)
      ctx!.clip()
      for (let i = 0; i < 100; i++) {
        const a = (i * 137.508 * Math.PI) / 180 + t * 0.03
        const dist = (0.1 + ((i * 61) % 100) / 100 * 0.82) * r
        const lx = cx + Math.cos(a) * dist
        const ly = cy + Math.sin(a) * dist * 0.45
        const fl = 0.2 + 0.8 * Math.abs(Math.sin(t * 1.5 + i * 0.9))
        const sr = 0.5 + ((i * 29) % 10) / 12
        ctx!.beginPath()
        ctx!.arc(lx, ly, sr, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(255,200,80,${fl * 0.7})`
        ctx!.fill()
      }
      ctx!.restore()

      // Cyan rim glow
      ctx!.beginPath()
      ctx!.arc(cx, cy, r, 0, Math.PI * 2)
      ctx!.strokeStyle = "rgba(0,210,255,0.65)"
      ctx!.lineWidth = 3
      ctx!.shadowBlur = 35
      ctx!.shadowColor = "#00d0ff"
      ctx!.stroke()
      ctx!.shadowBlur = 0

      // Bright top arc (atmosphere shimmer)
      const shimmerGrad = ctx!.createLinearGradient(cx - r, cy - r, cx + r, cy - r * 0.5)
      shimmerGrad.addColorStop(0, "transparent")
      shimmerGrad.addColorStop(0.25, "rgba(0,200,255,0.10)")
      shimmerGrad.addColorStop(0.5, "rgba(100,180,255,0.20)")
      shimmerGrad.addColorStop(0.75, "rgba(0,200,255,0.10)")
      shimmerGrad.addColorStop(1, "transparent")
      ctx!.beginPath()
      ctx!.arc(cx, cy, r + 2, Math.PI * 1.1, Math.PI * 1.9)
      ctx!.strokeStyle = shimmerGrad
      ctx!.lineWidth = 8
      ctx!.stroke()
    }

    // The signature flowing neon waves at the bottom
    function drawWaves(W: number, H: number) {
      const waves = [
        { yBase: 0.68, amp: 0.06,  freq: 0.85, speed: 0.40, color: "#7c3aed", alpha: 0.75, blur: 16, lw: 3.0 },
        { yBase: 0.72, amp: 0.07,  freq: 1.00, speed: 0.50, color: "#a855f7", alpha: 0.60, blur: 12, lw: 2.2 },
        { yBase: 0.76, amp: 0.055, freq: 1.15, speed: 0.35, color: "#06b6d4", alpha: 0.70, blur: 18, lw: 2.5 },
        { yBase: 0.80, amp: 0.065, freq: 0.80, speed: 0.55, color: "#3b82f6", alpha: 0.50, blur: 12, lw: 1.8 },
        { yBase: 0.84, amp: 0.050, freq: 1.30, speed: 0.30, color: "#a855f7", alpha: 0.40, blur: 8,  lw: 1.4 },
        { yBase: 0.87, amp: 0.045, freq: 1.45, speed: 0.45, color: "#06b6d4", alpha: 0.35, blur: 6,  lw: 1.0 },
        { yBase: 0.90, amp: 0.040, freq: 0.95, speed: 0.60, color: "#7c3aed", alpha: 0.25, blur: 6,  lw: 0.8 },
      ]
      waves.forEach(({ yBase, amp, freq, speed, color, alpha, blur, lw }) => {
        ctx!.beginPath()
        for (let px = 0; px <= W; px += 3) {
          const nx = px / W
          const py = H * (yBase + amp * Math.sin(freq * Math.PI * 2 * nx + t * speed))
          if (px === 0) {
            ctx!.moveTo(px, py)
          } else {
            ctx!.lineTo(px, py)
          }
        }
        ctx!.strokeStyle = color
        ctx!.globalAlpha = alpha
        ctx!.lineWidth = lw
        ctx!.shadowBlur = blur
        ctx!.shadowColor = color
        ctx!.stroke()
        ctx!.shadowBlur = 0
        ctx!.globalAlpha = 1
      })
    }

    function draw() {
      const W = canvas!.width
      const H = canvas!.height
      ctx!.clearRect(0, 0, W, H)

      drawStars(W, H)
      drawEdgeGlows(W, H)
      drawEarth(W, H)
      drawWaves(W, H)
      drawHaloRing(W, H)
      drawOrbits(W, H)
      drawOrbitDots(W, H)

      t += 0.016
      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ pointerEvents: "none" }}
    />
  )
}
