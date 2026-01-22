import Picture1 from "@/assets/Picture1.jpg";
import Picture2 from "@/assets/Picture2.jpg";
import Picture3 from "@/assets/Picture3.jpg";
import Picture4 from "@/assets/Picture4.jpg";
import QRAM from "@/assets/QRAM.png";
import QPU from "@/assets/QPU.png";

const dataTypes = [
  { label: "Images", image: Picture1, color: "text-destructive" },
  { label: "Sensory data", image: Picture2, color: "text-secondary" },
  { label: "Videos", image: Picture3, color: "text-quantum-blue" },
  { label: "Text", image: Picture4, color: "text-destructive" },
];

const QuantumSlideshow = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-start sm:justify-center p-2 sm:p-4 md:p-8 overflow-x-hidden">
      <div className="relative flex flex-col items-center gap-1 sm:gap-2 w-full max-w-4xl scale-[0.85] sm:scale-100 origin-top">

        <div>
          <div className="border-2 border-accent rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-4 bg-background shadow-lg">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-destructive text-center mb-2 sm:mb-4">Classical Datasets</h2>
            <div className="flex gap-2 sm:gap-4 md:gap-8">
              {dataTypes.map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg overflow-hidden shadow-md mb-1 sm:mb-2">
                    <img src={item.image} alt={item.label} className="w-full h-full object-cover" />
                  </div>
                  <span className={`text-[10px] sm:text-xs md:text-sm font-semibold ${item.color} text-center leading-tight`}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-0.5 h-4 sm:h-8 bg-primary" />
          <div className="w-0 h-0 border-l-[6px] sm:border-l-[8px] border-l-transparent border-r-[6px] sm:border-r-[8px] border-r-transparent border-t-[10px] sm:border-t-[12px] border-t-primary" />
        </div>

        <div>
          <div className="border-2 border-primary rounded-lg px-6 sm:px-10 py-2 sm:py-4 bg-background shadow-lg" style={{ boxShadow: "0 10px 25px -3px rgba(45,212,191,0.3)" }}>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">RAM</span>
          </div>
        </div>

        <div className="flex gap-4 sm:gap-6 items-center py-0.5 sm:py-1">
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-8 sm:h-12 bg-secondary" />
            <div className="w-0 h-0 border-l-[6px] sm:border-l-[8px] border-l-transparent border-r-[6px] sm:border-r-[8px] border-r-transparent border-t-[10px] sm:border-t-[12px] border-t-secondary" />
          </div>
          <div className="flex flex-col items-center">
            <div className="w-0 h-0 border-l-[6px] sm:border-l-[8px] border-l-transparent border-r-[6px] sm:border-r-[8px] border-r-transparent border-b-[10px] sm:border-b-[12px] border-b-primary" />
            <div className="w-0.5 h-8 sm:h-12 bg-primary" />
          </div>
        </div>

        <div>
          <div className="border-2 border-secondary rounded-xl sm:rounded-2xl px-4 sm:px-8 py-2 sm:py-4 bg-background shadow-lg" style={{ boxShadow: "0 10px 25px -3px rgba(168,85,247,0.3)" }}>
            <span className="text-sm sm:text-xl md:text-2xl font-bold text-secondary whitespace-nowrap">Quantum Classical Gateway</span>
          </div>
        </div>

        <div className="w-full mt-2 sm:mt-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-2 sm:gap-4">
            <div className="flex sm:hidden w-full justify-around items-start">
              <div className="flex flex-col items-center">
                <div className="border-2 border-quantum-blue rounded-xl p-2 bg-background shadow-lg" style={{ boxShadow: "0 5px 15px -3px rgba(59,130,246,0.4)" }}>
                  <h3 className="text-quantum-blue font-bold text-sm mb-1 text-center">QPU</h3>
                  <div className="w-10 h-10 mx-auto">
                    <svg viewBox="0 0 64 64" className="w-full h-full">
                      <rect x="16" y="16" width="32" height="32" rx="4" fill="none" stroke="hsl(210, 80%, 55%)" strokeWidth="2" />
                      <circle cx="32" cy="32" r="8" fill="none" stroke="hsl(174, 72%, 40%)" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <p className="text-center text-destructive font-bold mt-1 text-[10px]">Quantum Processing Unit</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="border-2 border-accent rounded-xl p-2 bg-background shadow-lg" style={{ boxShadow: "0 5px 15px -3px rgba(249,115,22,0.4)" }}>
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 rounded-full border-2 border-accent flex items-center justify-center">
                      <span className="text-accent font-bold text-xs">①</span>
                    </div>
                    <span className="text-accent font-bold text-sm">RAM</span>
                  </div>
                </div>
                <p className="text-center text-destructive font-bold mt-1 text-[10px]">Quantum Main Memory</p>
              </div>
            </div>

            <div className="flex flex-col items-center w-full sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div className="hidden sm:flex w-50 justify-center sm:ml-4">
                <div className="flex flex-col items-center">
                  <div className="border-2 border-quantum-blue rounded-2xl p-4 bg-background shadow-lg" style={{ boxShadow: "0 10px 25px -3px rgba(59,130,246,0.4)" }}>
                    <img src={QPU} alt="QPU" className="w-30 h-30 object-contain mx-auto" />
                  </div>
                  <p className="text-center text-destructive font-bold mt-2 text-sm">Quantum Processing Unit</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 sm:gap-4 w-full sm:flex-1 mt-2 sm:mt-0">

                <div className="flex-1 flex flex-col gap-0.5 sm:gap-1 px-1 sm:px-4 max-w-[120px] sm:max-w-none -mt-8 sm:-mt-12">
                  {/* Top row: |AR⟩ ⊗n — right-pointing magenta arrow */}
                  <div className="flex flex-col">
                    <div className="text-quantum-red px-8 font-medium whitespace-nowrap">|AR⟩<sup className="text-quantum-orange text-[8px] sm:text-xs">⊗n</sup></div>
                    <div className="flex items-center justify-center w-full">
                      <div className="flex-1 h-[3px] sm:h-[4px] bg-quantum-red" />
                      <div className="w-0 h-0 border-t-[6px] sm:border-t-[8px] border-t-transparent border-b-[6px] sm:border-b-[8px] border-b-transparent border-l-[12px] sm:border-l-[16px] border-l-quantum-red" />
                    </div>
                  </div>

                  {/* Middle row: |DR⟩ ⊗m — left-pointing gold arrow */}
                    <div className="flex flex-col">
                      <div className="text-quantum-gold px-6 font-medium whitespace-nowrap">|DR⟩<sup className="text-quantum-red text-[8px] sm:text-xs">⊗m</sup></div>
                      <div className="flex items-center justify-center w-full">
                        <div className="w-0 h-0 border-t-[6px] sm:border-t-[8px] border-t-transparent border-b-[6px] sm:border-b-[8px] border-b-transparent border-r-[12px] sm:border-r-[16px] border-r-quantum-gold" />
                        <div className="flex-1 h-[3px] sm:h-[4px] bg-quantum-gold" />
                      <div className="w-0 h-0 border-t-[6px] sm:border-t-[8px] border-t-transparent border-b-[6px] sm:border-b-[8px] border-b-transparent border-l-[12px] sm:border-l-[16px] border-l-quantum-gold" />
                      </div>
                    </div>

                  {/* Bottom row: |r⟩ = |0⟩ — right-pointing blue arrow */}
                  <div className="flex flex-col">
                    <div className="text-quantum-blue px-8 font-medium whitespace-nowrap">|r⟩=|0⟩</div>
                    <div className="flex items-center justify-center w-full">
                      <div className="flex-1 h-[3px] sm:h-[4px] bg-quantum-blue" />
                      <div className="w-0 h-0 border-t-[6px] sm:border-t-[8px] border-t-transparent border-b-[6px] sm:border-b-[8px] border-b-transparent border-l-[12px] sm:border-l-[16px] border-l-quantum-blue" />
                    </div>
                  </div>
                </div>
                
                <div className="hidden sm:flex flex-col items-center">
                  <div className="border-2 border-accent rounded-2xl p-4 bg-background shadow-lg " style={{ boxShadow: "0 10px 25px -3px rgba(249,115,22,0.4)" }}>
                    <div className="flex items-center gap-2">
                      <div className="space-y-1 sm:space-y-3 font-mono text-xs sm:text-base md:text-lg">
                        {[
                          { text: "|A⟩", sup: "⊗n", color: "text-quantum-red", supColor: "text-quantum-orange" },
                          { text: "|D⟩", sup: "⊗m", color: "text-quantum-gold", supColor: "text-quantum-red" },
                          { text: "|dq⟩", color: "text-quantum-blue" },
                        ].map((item, i) => (
                          <div key={i} className={`${item.color} font-medium whitespace-nowrap`}>
                            {item.text}{item.sup && <sup className={`${item.supColor} text-[8px] sm:text-xs`}>{item.sup}</sup>}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-center gap-2">
                        <img src={QRAM} alt="QRAM" className="w-23 h-23 object-contain mx-auto" />
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-destructive font-bold mt-2 text-sm">Quantum Main Memory</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumSlideshow;

