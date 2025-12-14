"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { Header } from "@/components/header"
import { useState } from "react"

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }
    // Handle signup logic here
    console.log("Signup attempt:", { email, password })
  }

  const handleGoogleSignup = () => {
    // TODO: Implement Google OAuth flow
    console.log("Google signup initiated")
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1220 810"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <g clipPath="url(#clip0_signup)">
            <mask
              id="mask0_signup"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="10"
              y="-1"
              width="1200"
              height="812"
            >
              <rect x="10" y="-0.84668" width="1200" height="811.693" fill="url(#paint0_linear_signup)" />
            </mask>
            <g mask="url(#mask0_signup)">
              {[...Array(35)].map((_, i) => (
                <React.Fragment key={`row-${i}`}>
                  {[...Array(22)].map((_, j) => (
                    <rect
                      key={`cell-${i}-${j}`}
                      x={-20.0891 + i * 36}
                      y={9.2 + j * 36}
                      width="35.6"
                      height="35.6"
                      stroke="hsl(var(--foreground))"
                      strokeOpacity="0.11"
                      strokeWidth="0.4"
                      strokeDasharray="2 2"
                    />
                  ))}
                </React.Fragment>
              ))}
            </g>

            <g filter="url(#filter0_signup)">
              <path
                d="M1447.45 -87.0203V-149.03H1770V1248.85H466.158V894.269C1008.11 894.269 1447.45 454.931 1447.45 -87.0203Z"
                fill="url(#paint1_linear_signup)"
              />
            </g>

            <g filter="url(#filter1_signup)">
              <path
                d="M1383.45 -151.02V-213.03H1706V1184.85H402.158V830.269C944.109 830.269 1383.45 390.931 1383.45 -151.02Z"
                fill="url(#paint2_linear_signup)"
                fillOpacity="0.69"
              />
            </g>
          </g>

          <rect
            x="0.5"
            y="0.5"
            width="1219"
            height="809"
            rx="15.5"
            stroke="hsl(var(--foreground))"
            strokeOpacity="0.06"
          />

          <defs>
            <filter
              id="filter0_signup"
              x="147.369"
              y="-467.818"
              width="1941.42"
              height="2035.46"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="159.394" result="effect1_foregroundBlur_signup" />
            </filter>
            <filter
              id="filter1_signup"
              x="-554.207"
              y="-1169.39"
              width="3216.57"
              height="3310.61"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="478.182" result="effect1_foregroundBlur_signup" />
            </filter>
            <linearGradient
              id="paint0_linear_signup"
              x1="35.0676"
              y1="23.6807"
              x2="903.8"
              y2="632.086"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="hsl(var(--foreground))" stopOpacity="0" />
              <stop offset="1" stopColor="hsl(var(--muted-foreground))" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_signup"
              x1="1118.08"
              y1="-149.03"
              x2="1118.08"
              y2="1248.85"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="hsl(var(--foreground))" />
              <stop offset="0.578125" stopColor="hsl(var(--primary-light))" />
              <stop offset="1" stopColor="hsl(var(--primary))" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_signup"
              x1="1054.08"
              y1="-213.03"
              x2="1054.08"
              y2="1184.85"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="hsl(var(--foreground))" />
              <stop offset="0.578125" stopColor="hsl(var(--primary-light))" />
              <stop offset="1" stopColor="hsl(var(--primary))" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20">
        {/* <Header /> */}
      </div>

      {/* Signup Form Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-[400px]">
          <div className="space-y-8">
            {/* Heading */}
            <div className="space-y-3 text-center">
              <h1 className="text-foreground text-3xl md:text-4xl font-semibold leading-tight">Create account</h1>
              <p className="text-muted-foreground text-base font-medium">Join us to accelerate your Placement Journey</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-foreground text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground h-10"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-foreground text-sm font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground h-10"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-foreground text-sm font-medium">
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground h-10"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 py-3 rounded-full font-medium text-base transition-all duration-200"
              >
                Create account
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-border border-t" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background text-muted-foreground">or</span>
              </div>
            </div>

            {/* Google Sign Up button */}
            <Button
              onClick={handleGoogleSignup}
              type="button"
              className="w-full bg-muted text-foreground hover:bg-muted/80 py-3 rounded-full font-medium text-base transition-all duration-200 border border-border flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Sign up with Google
            </Button>

            {/* Sign In Link */}
            <p className="text-center text-muted-foreground text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-primary font-medium hover:text-primary/80 transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
