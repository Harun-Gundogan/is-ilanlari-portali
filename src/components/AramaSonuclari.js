import React from 'react';
import { useLocation } from 'react-router-dom';
import { is_ilanlari_veriler } from '../components/IlanList';
import IlanKartlari from '../components/IlanList'; 

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const AramaSonuclari = () => {
  const query = useQuery();
  const searchTerm = query.get('q') || '';
  const location = query.get('location') || '';
  const category = query.get('category') || '';

  const filteredJobs = is_ilanlari_veriler.filter(ilan => 
    ilan.job_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ilan.job_description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ilan.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ilan.category.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div id="ilan-listesi">
      {filteredJobs.length > 0 ? (
        filteredJobs.map((ilan, index) => (
          <IlanKartlari key={index} index={index} ilan={ilan} />
        ))
      ) : (
        <center><div><b>İlan bulunamadı</b></div></center> 
      )}
    </div>
  );
};

export default AramaSonuclari;
