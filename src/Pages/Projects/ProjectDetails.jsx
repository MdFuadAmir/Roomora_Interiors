import { useParams, Link } from "react-router";
import { projects } from "../../../public/Data/Projects";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import SEO from "../../Utils/SEO";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#FAF9F6] dark:bg-[#0A0A0A]">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
          Project Not Found
        </h2>
      </section>
    );
  }

  return (
    <section className="bg-[#FAF9F6] dark:bg-[#0A0A0A] text-neutral-900 dark:text-white">
      <SEO
        title={project.title}
        description={project.shortDescription}
        keywords={`${project.title}, ${project.category}, luxury interior project`}
        image={project.image}
      />
      {/* HERO */}
      <div className="relative h-[80vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55 flex items-end">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 pb-16 w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-amber-400 uppercase tracking-[0.3em] text-xs font-bold"
            >
              {project.category}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-bold text-gray-300 mt-4"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-20 space-y-20">
        {/* Back */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-3 text-sm uppercase tracking-widest text-amber-500"
        >
          <FaArrowLeft />
          Back to Projects
        </Link>

        {/* INFO GRID */}
        <div className="grid md:grid-cols-4 gap-8 border-y border-neutral-200 dark:border-white/10 py-12">
          {[
            ["Location", project.location],
            ["Year", project.year],
            ["Client", project.client],
            ["Duration", project.duration],
            ["Budget", project.budget],
            ["Area", project.area],
          ].map(([label, value], i) => (
            <div key={i}>
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                {label}
              </p>
              <h4 className="text-lg font-semibold mt-2">{value}</h4>
            </div>
          ))}
        </div>

        {/* DESCRIPTION */}
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Project Overview</h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-8">
              {project.fullDescription}
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-amber-500">
                Challenge
              </h3>
              <p>{project.challenge}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-amber-500">
                Solution
              </h3>
              <p>{project.solution}</p>
            </div>
          </div>
        </div>

        {/* SERVICES + MATERIALS */}
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {project.services.map((service, i) => (
                <li key={i} className="text-neutral-600 dark:text-neutral-300">
                  • {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Materials</h3>
            <ul className="space-y-3">
              {project.materials.map((material, i) => (
                <li key={i} className="text-neutral-600 dark:text-neutral-300">
                  • {material}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(project.stats).map(([key, value]) => (
            <div
              key={key}
              className="p-8 bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-center"
            >
              <h2 className="text-4xl font-bold text-amber-500">{value}</h2>
              <p className="uppercase tracking-widest text-xs mt-2">{key}</p>
            </div>
          ))}
        </div>

        {/* GALLERY */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Gallery</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {project.gallery.map((img, i) => (
              <motion.img
                key={i}
                whileHover={{ scale: 1.03 }}
                src={img}
                alt=""
                className="w-full h-100 object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
