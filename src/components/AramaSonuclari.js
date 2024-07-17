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
    (searchTerm ? (
      ilan.job_title.includes(searchTerm) ||
      ilan.job_description.includes(searchTerm) ||
      ilan.location === location ||
      ilan.category === category
    ) : true) &&
    (location ? ilan.location === location : true) &&
    (category ? ilan.category === category : true)
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