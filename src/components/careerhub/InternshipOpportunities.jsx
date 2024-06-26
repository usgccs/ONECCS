const InternshipOpportunities = () => {
    return (
      <div className="flex flex-col items-center p-8 bg-gray-100">
        <a 
          href="https://docs.google.com/spreadsheets/d/1q_7sak2KaT4-vRJSvc0G4_yrKPSzQc_ap_N3JU0Cz8Q/edit?gid=1454046884#gid=1454046884" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative"
        >
          <img 
            src="https://res.cloudinary.com/dnlrbmzns/image/upload/v1719417784/companies_kdbygk.jpg"
            alt="Internship Opportunities"
            className="object-cover rounded-2xl drop-shadow-md w-full h-auto max-w-4xl transition-transform transform hover:scale-105 hover:shadow-lg"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 rounded-2xl transition-opacity"></div>
        </a>
      </div>
    );
  }
  
  export default InternshipOpportunities;
  