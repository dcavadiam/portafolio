/** Datos de contacto públicos del portfolio (mantener sincronizados con la sección Hero). */
export const CONTACT = {
  email: "diegocamodev@gmail.com",
  github: "https://github.com/dcavadiam",
  linkedin: "https://linkedin.com/in/diego-cavadia-montes",
  /** Ubicación / modalidad (coherente con sección Freelance). */
  location: "Remoto · LATAM",
  availability: "Disponible para proyectos freelance",
} as const;

export type ContactKeys = keyof typeof CONTACT;
