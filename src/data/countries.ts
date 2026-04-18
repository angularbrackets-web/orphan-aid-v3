export interface OrphanMarker {
  id: string;
  label: string;
  location: [number, number];
  orphans: number;
  crisis: "high" | "vulnerable";
}

export const orphanAidMarkers: OrphanMarker[] = [
  { id: "palestine", label: "Palestine (Gaza)", location: [31.5, 34.47],   orphans: 12400, crisis: "high" },
  { id: "syria",     label: "Syria",            location: [34.80, 38.99],  orphans: 9800,  crisis: "high" },
  { id: "yemen",     label: "Yemen",            location: [15.55, 48.52],  orphans: 7300,  crisis: "high" },
  { id: "pakistan",  label: "Pakistan",         location: [30.38, 69.35],  orphans: 5100,  crisis: "vulnerable" },
  { id: "india",     label: "India",            location: [20.59, 78.96],  orphans: 4600,  crisis: "vulnerable" },
  { id: "indonesia", label: "Indonesia",        location: [-0.79, 113.92], orphans: 3200,  crisis: "vulnerable" },
  { id: "nigeria",   label: "Nigeria",          location: [9.08, 8.68],    orphans: 6700,  crisis: "vulnerable" },
  { id: "thailand",  label: "Thailand",         location: [15.87, 100.99], orphans: 1800,  crisis: "vulnerable" },
  { id: "mauritania",label: "Mauritania",       location: [20.25, -10.94], orphans: 900,   crisis: "vulnerable" },
];

export const highCrisisCountries = orphanAidMarkers.filter(m => m.crisis === "high");
export const vulnerableCountries = orphanAidMarkers.filter(m => m.crisis === "vulnerable");

export const totalOrphansSupported = orphanAidMarkers.reduce((sum, m) => sum + m.orphans, 0);
