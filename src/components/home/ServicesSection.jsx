import ServiceCard from "./ServiceCard";

function ServicesSection() {
  return (
    <section>
      <h2>Servicios Médicos Especializados</h2>

      <ServiceCard
        title="Consultas"
        description="Exámenes veterinarios completos."
      />

      <ServiceCard
        title="Vacunación"
        description="Protección para tu mascota."
      />

      <ServiceCard
        title="Cirugía"
        description="Procedimientos especializados."
      />

      <ServiceCard title="Laboratorio" description="Diagnósticos precisos." />
    </section>
  );
}

export default ServicesSection;
