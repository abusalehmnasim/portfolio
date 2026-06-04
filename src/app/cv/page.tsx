import { siteConfig, education, projects, skillGroups, certifications } from "@/lib/data";

export const metadata = {
  title: `CV - ${siteConfig.name}`,
  description: `ATS-Friendly resume of ${siteConfig.name}`,
};

export default function CVPage() {
  // Hardcoded location formatting exactly as in the template PDF
  const contactAddress = "House no-12/9/G-1, Parbat Nagar | Pallabi, Dhaka";
  
  return (
    <div className="min-h-screen bg-zinc-50 py-10 print:py-0 print:bg-white text-[#2c3e50] font-sans antialiased">
      {/* Container matching the clean template styling */}
      <div className="mx-auto max-w-[800px] bg-white p-12 shadow-md print:p-0 print:shadow-none print:max-w-none text-[13px] leading-relaxed">
        
        {/* Name Header - Styled identically (uppercase green-gold color matching the template) */}
        <header className="text-center pb-6">
          <h1 className="text-[34px] font-normal tracking-wide text-[#558b2f]">
            {siteConfig.name.toUpperCase()}
          </h1>
          {/* Subheader Contacts: Match exact template string format */}
          <div className="mt-2 text-[12px] text-zinc-800">
            {contactAddress} | {siteConfig.phone} | {siteConfig.email}
          </div>
        </header>

        {/* Sections */}
        <div className="space-y-6">

          {/* Objective Section */}
          <section className="space-y-1">
            <h2 className="text-[14px] font-semibold text-black tracking-widest uppercase border-b border-transparent pb-0.5">
              OBJECTIVE
            </h2>
            <p className="text-zinc-800 text-[12.5px] leading-[1.6] pt-1">
              Finance undergraduate and pre-articled CA student combining academic rigor with advanced technical capabilities in Python, SQL, and Power BI. Built a live data dashboard processing open-source geographical APIs and an XGBoost machine learning model for stock market forecasting
            </p>
          </section>

          {/* Projects Section */}
          <section className="space-y-2">
            <h2 className="text-[14px] font-semibold text-black tracking-widest uppercase border-b border-transparent pb-0.5">
              .PROJECT
            </h2>
            
            <div className="space-y-3 pt-1">
              {/* Dhaka Restaurant Directory */}
              <div>
                <h3 className="font-bold text-black text-[13px]">
                  Dhaka Restaurant Directory
                </h3>
                <p className="text-[12px] text-zinc-800">
                  Link: <a href="https://github.com/abusalehmnasim/dhaka-restaurant-directory" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#2c3e50]">https://github.com/abusalehmnasim/dhaka-restaurant-directory</a>
                </p>
                <p className="text-[12.5px] text-zinc-800 leading-[1.6] mt-0.5">
                  It is a full-stack data analytics project demonstrating practical skills in API integration, automated data cleaning, and front-end deployment.
                </p>
              </div>

              {/* DSE Market Prediction */}
              <div>
                <h3 className="font-bold text-black text-[13px]">
                  DSE Market Prediction
                </h3>
                <p className="text-[12px] text-zinc-800">
                  Link: <a href="https://github.com/abusalehmnasim/DSE-Market-Prediction-XGBoost" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#2c3e50]">https://github.com/abusalehmnasim/DSE-Market-Prediction-XGBoost</a>
                </p>
                <p className="text-[12.5px] text-zinc-800 leading-[1.6] mt-0.5">
                  It showcases a strong intersection of financial market analysis, risk management, and advanced machine learning techniques.
                </p>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="space-y-3">
            <h2 className="text-[14px] font-semibold text-black tracking-widest uppercase border-b border-transparent pb-0.5">
              EDUCATION
            </h2>

            <div className="space-y-4 pt-1">
              {/* BUP */}
              <div className="space-y-0.5 text-[12.5px] text-zinc-800">
                <h3 className="font-bold text-black text-[13px]">
                  Bachelors of Business Administration, Finance Major
                </h3>
                <p className="leading-tight">Bangladesh University of Professionals</p>
                <div className="flex justify-between items-baseline leading-normal">
                  <span>Department of Business Administration general (BBA General)</span>
                  <span className="text-[12px] text-zinc-700 whitespace-nowrap">Expected to graduate in May 2027</span>
                </div>
              </div>

              {/* ICAB */}
              <div className="space-y-0.5 text-[12.5px] text-zinc-800">
                <h3 className="font-bold text-black text-[13px]">
                  Chartered Accountant
                </h3>
                <p className="leading-tight">Institute of Chartered Accountant of Bangladesh</p>
                <p className="text-zinc-700 text-[12px]">Certificate Level cleared</p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="space-y-2">
            <h2 className="text-[14px] font-semibold text-black tracking-widest uppercase border-b border-transparent pb-0.5">
              SKILLS
            </h2>
            
            <div className="space-y-1 pt-1 text-[12.5px] text-zinc-800 leading-[1.6]">
              <div className="flex">
                <span className="min-w-[130px] text-zinc-700">Analytical tools:</span>
                <span>Advance Excel, Power BI</span>
              </div>
              <div className="flex">
                <span className="min-w-[130px] text-zinc-700">Financials skills:</span>
                <span>Financial Modeling (3 statement, DCF, Financial statement Analysis, Budgeting and Forecasting, Variance Analysis</span>
              </div>
              <div className="flex">
                <span className="min-w-[130px] text-zinc-700">Language:</span>
                <span>Python, SQL</span>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="space-y-2">
            <h2 className="text-[14px] font-semibold text-black tracking-widest uppercase border-b border-transparent pb-0.5">
              CERTIFICATION
            </h2>
            
            <div className="pt-1 text-[12.5px] text-zinc-800 leading-[1.6]">
              Associate Data Analyst- DataCamp
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
