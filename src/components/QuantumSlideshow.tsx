import Picture1 from "@/assets/Picture1.jpg";
import Picture2 from "@/assets/Picture2.jpg";
import Picture3 from "@/assets/Picture3.jpg";
import Picture4 from "@/assets/Picture4.jpg";
import QRAM from "@/assets/QRAM.png";
import QPU from "@/assets/QPU.png";
import ARROWS from "@/assets/yea (1).png";
import { motion } from "framer-motion";

const dataTypes = [
  { label: "Images", image: Picture1, color: "text-destructive" },
  { label: "Sensory data", image: Picture2, color: "text-secondary" },
  { label: "Videos", image: Picture3, color: "text-quantum-blue" },
  { label: "Text", image: Picture4, color: "text-destructive" },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const QuantumSlideshow = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-start p-6 overflow-x-hidden">
      <div className="relative flex flex-col items-center gap-2 w-full max-w-4xl origin-top non-responsive-wrapper">

        {/* Step 1: Classical Datasets */}
        <motion.div
          className="mobile-scale"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.96, ease: "easeOut" }}
        >
          <div className="border-2 border-accent rounded-2xl px-6 py-4 bg-background shadow-lg">
            <h2 className="text-3xl font-bold text-destructive text-center mb-4">Classical Datasets</h2>
            <div className="flex gap-8">
              {dataTypes.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.64, delay: 0.32 + index * 0.16 }}
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden shadow-md mb-2">
                    <img src={item.image} alt={item.label} className="w-full h-full object-cover" />
                  </div>
                  <span className={`text-sm font-semibold ${item.color} text-center leading-tight`}>{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Arrow 1: Classical Datasets to RAM */}
        <motion.div
          className="flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.64, delay: 1.28 }}
        >
          <div className="w-0.5 h-8 bg-primary" />
          <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-primary" />
        </motion.div>

        {/* Step 1 continued: RAM */}
        <motion.div
          className="mobile-scale"
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <div className="border-2 border-primary rounded-lg px-10 py-4 bg-background shadow-lg" style={{ boxShadow: "0 10px 25px -3px rgba(45,212,191,0.3)" }}>
            <span className="text-3xl font-bold text-primary">RAM</span>
          </div>
        </motion.div>

        {/* Arrow 2: RAM to Gateway (bidirectional) */}
        <motion.div
          className="flex gap-6 items-center py-1"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.64, delay: 2.24 }}
        >
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-12 bg-secondary" />
              <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-secondary" />
          </div>
          <div className="flex flex-col items-center">
            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-primary" />
            <div className="w-0.5 h-12 bg-primary" />
          </div>
        </motion.div>

        {/* Step 2: Quantum Classical Gateway */}
        <motion.div
          className="mobile-scale"
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          transition={{ duration: 0.8, delay: 2.88 }}
        >
          <div className="border-2 border-secondary rounded-2xl px-8 py-4 bg-background shadow-lg" style={{ boxShadow: "0 10px 25px -3px rgba(168,85,247,0.3)" }}>
            <span className="text-2xl font-bold text-secondary whitespace-nowrap">Quantum Classical Gateway</span>
          </div>
        </motion.div>

        {/* Bottom section with QPU, Arrows, and QRAM */}
        <motion.div
          className="w-full ml-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.96, delay: 3.52 }}
        >
          <div className="show-below-950 mobile-row-mr flex w-full justify-around items-start gap-6 px-2">
            {/* QPU - left */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 4.8 }}
            >
                <div className="border-2 border-quantum-blue rounded-xl p-3 bg-background shadow-lg" style={{ boxShadow: "0 6px 18px -3px rgba(59,130,246,0.45)" }}>
                <img src={QPU} alt="QPU" className="w-20 h-20 object-contain mx-auto" />
              </div>
              <p className="text-center text-destructive font-bold mt-1 text-sm">Quantum Processing Unit</p>
            </motion.div>

            {/* Arrows - center */}
            <motion.div
              className="flex items-start justify-center"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 3.84 }}
            >
              <img src={ARROWS} alt="arrows" className="w-[140px] h-auto" />
            </motion.div>

            {/* QRAM - right */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 5.44 }}
            >
              <div className="border-2 rounded-xl p-2 bg-background shadow-lg" style={{ boxShadow: "0 5px 15px -3px rgba(249,115,22,0.4)", borderColor: "#f2b90d" }}>
                <div className="flex items-center gap-1">
                  <div className="space-y-0.5 font-mono text-[10px]">
                    {[
                      { text: "|A⟩", sup: "⊗n", color: "text-quantum-red", supColor: "text-quantum-orange" },
                      { text: "|D⟩", sup: "⊗m", color: "text-quantum-gold", supColor: "text-quantum-red" },
                      { text: "|dq⟩", color: "text-quantum-blue" },
                    ].map((item, i) => (
                      <div key={i} className={`${item.color} font-bold whitespace-nowrap`}>
                        {item.text}{item.sup && <sup className={`${item.supColor} text-[6px] font-bold`}>{item.sup}</sup>}
                      </div>
                    ))}
                  </div>
                  <img src={QRAM} alt="QRAM" className="w-20 h-20 object-contain" />
                </div>
              </div>
              <p className="text-center text-destructive font-bold mt-1 text-sm">Quantum Main Memory</p>
            </motion.div>
          </div>

          {/* Desktop layout (always shown) */}
          <div className="hide-below-950 flex flex-row items-start justify-between gap-4">
            {/* QPU - appears last */}
            <motion.div
              className="flex w-50 justify-center mt-14 ml-4 translate-y-16"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.96, delay: 5.44 }}
            >
              <div className="flex flex-col items-center">
                <div className="border-2 border-quantum-blue rounded-2xl p-4 bg-background shadow-lg" style={{ boxShadow: "0 10px 25px -3px rgba(59,130,246,0.4)" }}>
                  <img src={QPU} alt="QPU" className="w-[154px] h-[144px] object-contain mx-auto" />
                </div>
                <p className="text-center text-destructive font-bold mt-2 text-sm">Quantum Processing Unit</p>
              </div>
            </motion.div>

            {/* Arrows - appears after Gateway */}
            <motion.div
              className="flex items-center mt-3 justify-center px-4 flex-none translate-y-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 3.84 }}
            >
              <img src={ARROWS} alt="arrows" className="w-[300px] h-auto mx-2" />
            </motion.div>

            {/* QRAM - appears after Arrows */}
            <motion.div
              className="flex flex-col items-center mt-14 translate-y-16"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.96, delay: 4.8 }}
            >
              <div className="border-2 border-accent rounded-2xl p-4 bg-background shadow-lg" style={{ boxShadow: "0 10px 25px -3px rgba(249,115,22,0.4)", borderColor: "#f2b90d" }}>
                <div className="flex items-center gap-2">
                  <div className="space-y-3 font-mono text-lg">
                    {[
                      { text: "|A⟩", sup: "⊗n", color: "text-quantum-red", supColor: "text-quantum-orange" },
                      { text: "|D⟩", sup: "⊗m", color: "text-quantum-gold", supColor: "text-quantum-red" },
                      { text: "|dq⟩", color: "text-quantum-blue" },
                    ].map((item, i) => (
                      <div key={i} className={`${item.color} font-bold whitespace-nowrap`}>
                        {item.text}{item.sup && <sup className={`${item.supColor} text-[8px] font-bold`}>{item.sup}</sup>}
                      </div>
                    ))}
                  </div>
                    <div className="flex items-center justify-center gap-2">
                    <img src={QRAM} alt="QRAM" className="w-23 h-23 object-contain mx-auto" />
                  </div>
                </div>
              </div>
              <p className="text-center text-destructive font-bold mt-2 text-sm">Quantum Main Memory</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuantumSlideshow;

