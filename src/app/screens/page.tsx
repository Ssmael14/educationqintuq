"use client";
import { useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import "../kintuq.css";
import { Icon, type Lang } from "@/components/kintuq/primitives";
import { Dashboard, LessonScreen, DailyWordScreen, CompletionScreen, ProfileScreen } from "@/components/kintuq/screens";
import { LessonsLibrary, UnitDetail, VoicesList, SpeakerDetail, VocabLibrary } from "@/components/kintuq/screens-content";
import { ManifestoScreen, VoicesDirectory, ShareableCard } from "@/components/kintuq/screens-cultural";
import { DashboardDesktop, DailyWordDesktop, LessonDesktop } from "@/components/kintuq/screens-desktop";
import { DashboardCentered, LessonCentered, DailyWordCentered } from "@/components/kintuq/screens-centered";

function Artboard({ label, width, height, scale = 1, children }: { label: string; width: number; height: number; scale?: number; children: ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, flexShrink: 0 }}>
      <div style={{ fontSize: 13, fontWeight: 500, color: "var(--ink-2)", fontFamily: "var(--font-ui)" }}>{label}</div>
      <div style={{ width: width * scale, height: height * scale, borderRadius: 14, overflow: "hidden", background: "var(--bg)", boxShadow: "0 1px 3px rgba(0,0,0,.08), 0 8px 28px rgba(0,0,0,.08)", border: "1px solid var(--hairline)" }}>
        <div style={{ width, height, transform: `scale(${scale})`, transformOrigin: "top left", overflow: "hidden" }}>{children}</div>
      </div>
    </div>
  );
}

function Section({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return (
    <section style={{ padding: "56px 48px 0" }}>
      <div className="serif" style={{ fontSize: 30, color: "var(--ink)", letterSpacing: "-0.02em" }}>{title}</div>
      <div style={{ fontSize: 15, color: "var(--muted)", marginTop: 4, marginBottom: 28 }}>{subtitle}</div>
      <div style={{ display: "flex", gap: 40, overflowX: "auto", paddingBottom: 16, alignItems: "flex-start" }}>{children}</div>
    </section>
  );
}

const W = 390;

export default function ScreensGallery() {
  const router = useRouter();
  const [lang, setLang] = useState<Lang>("en");

  return (
    <div className="kintuq-root" data-palette="sunrise" style={{ minHeight: "100vh", paddingBottom: 80 }}>
      <div style={{ position: "sticky", top: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 48px", background: "color-mix(in oklab, var(--bg) 90%, transparent)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--hairline)" }}>
        <div>
          <div className="serif" style={{ fontSize: 24, letterSpacing: "-0.01em" }}>Kintuq · All Screens</div>
          <div style={{ fontSize: 13, color: "var(--muted)" }}>Visual UX review</div>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div style={{ background: "color-mix(in oklab, var(--ink) 6%, transparent)", borderRadius: 999, padding: 3, display: "flex" }}>
            {(["en", "es"] as const).map((l) => (
              <button key={l} onClick={() => setLang(l)} style={{ padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 600, textTransform: "uppercase", background: lang === l ? "var(--ink)" : "transparent", color: lang === l ? "var(--bg)" : "var(--ink-2)" }}>{l}</button>
            ))}
          </div>
          <button onClick={() => router.push("/app")} style={{ padding: "8px 14px", borderRadius: 999, fontSize: 13, background: "var(--ink)", color: "var(--bg)", display: "inline-flex", alignItems: "center", gap: 6 }}>
            <Icon name="home" size={14} stroke="var(--bg)" /> Open app
          </button>
        </div>
      </div>

      <Section title="Core app" subtitle="Dashboard, lesson, daily word, completion, profile">
        <Artboard label="07 · Dashboard" width={W} height={1100}><Dashboard lang={lang} /></Artboard>
        <Artboard label="08 · Lesson (listen)" width={W} height={900}><LessonScreen lang={lang} /></Artboard>
        <Artboard label="09 · Daily word" width={W} height={1060}><DailyWordScreen lang={lang} /></Artboard>
        <Artboard label="10 · Lesson complete" width={W} height={844}><CompletionScreen lang={lang} /></Artboard>
        <Artboard label="11 · Profile" width={W} height={970}><ProfileScreen lang={lang} /></Artboard>
      </Section>

      <Section title="Browse & voices" subtitle="Library, units, speakers, vocabulary">
        <Artboard label="12 · Lessons library" width={W} height={1080}><LessonsLibrary lang={lang} /></Artboard>
        <Artboard label="13 · Unit detail" width={W} height={1020}><UnitDetail lang={lang} /></Artboard>
        <Artboard label="14 · Voices list" width={W} height={1000}><VoicesList lang={lang} /></Artboard>
        <Artboard label="15 · Speaker detail" width={W} height={1100}><SpeakerDetail lang={lang} /></Artboard>
        <Artboard label="16 · Vocabulary library" width={W} height={1080}><VocabLibrary lang={lang} /></Artboard>
      </Section>

      <Section title="Cultural depth & social" subtitle="Manifesto, voices directory, shareables">
        <Artboard label="33 · Manifesto" width={W} height={1200}><ManifestoScreen lang={lang} /></Artboard>
        <Artboard label="34 · Voices directory" width={W} height={1200}><VoicesDirectory lang={lang} /></Artboard>
        <Artboard label="35 · Shareable card" width={W} height={900}><ShareableCard lang={lang} /></Artboard>
      </Section>

      <Section title="Desktop · responsive" subtitle="Magazine-editorial layouts for wide screens">
        <Artboard label="22 · Dashboard · desktop" width={1440} height={900} scale={0.46}><DashboardDesktop lang={lang} /></Artboard>
        <Artboard label="23 · Daily word · desktop" width={1440} height={1400} scale={0.46}><DailyWordDesktop lang={lang} /></Artboard>
        <Artboard label="24 · Lesson · desktop" width={1440} height={900} scale={0.46}><LessonDesktop lang={lang} /></Artboard>
      </Section>

      <Section title="Centered · brilliant.org style" subtitle="Single narrow column, generous whitespace">
        <Artboard label="25 · Dashboard · centered" width={1440} height={1100} scale={0.46}><DashboardCentered lang={lang} /></Artboard>
        <Artboard label="26 · Lesson · centered" width={1440} height={900} scale={0.46}><LessonCentered lang={lang} /></Artboard>
        <Artboard label="27 · Daily word · centered" width={1440} height={1500} scale={0.46}><DailyWordCentered lang={lang} /></Artboard>
      </Section>
    </div>
  );
}
