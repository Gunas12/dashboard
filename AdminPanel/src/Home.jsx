import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { Bar, Cell, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { Pie, PieChart } from 'recharts';
import data from './data/data.json';
import events from './data/event.json';
function Home({ currentPage }) {
  const universities = {};
  data.forEach(student => {
    universities[student.Universitet] = universities[student.Universitet] ? universities[student.Universitet] + 1 : 1;
  });

  const universityData = Object.keys(universities).map(university => ({
    name: university,
    count: universities[university],
  }));

  const specialties = {};
  data.forEach(student => {
    specialties[student.İxtisas] = specialties[student.İxtisas] ? specialties[student.İxtisas] + 1 : 1;
  });

  const specialtyData = Object.keys(specialties).map(specialty => ({
    name: specialty,
    count: specialties[specialty],
  }));

  const colors = ['#ffa600','#ff6361','#bc5090','#58508d','#003f5c', '#00C49F',   'red', 'pink'];

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  const ages = {};
  data.forEach(student => {
    ages[student.Yaş] = ages[student.Yaş] ? ages[student.Yaş] + 1 : 1;
  });

  const ageData = Object.keys(ages).map(age => ({
    name: age,
    count: ages[age],
  }));

  const genders = {};
  data.forEach(student => {
    genders[student.Cinsi] = genders[student.Cinsi] ? genders[student.Cinsi] + 1 : 1;
  });

  const genderData = Object.keys(genders).map(gender => ({
    name: gender,
    count: genders[gender],
  }));


  const degrees = {};
  data.forEach(student => {
    if (degrees[student.Dərəcə]) {
      degrees[student.Dərəcə]++;
    } else {
      degrees[student.Dərəcə] = 1;
    }
  });
  
  const degreeData = Object.keys(degrees).map(degree => ({
    name: degree,
    count: degrees[degree],
  }));


   const universityCount = Object.keys(data.reduce((acc, student) => {
    acc[student.Universitet] = true;
    return acc;
  }, {})).length;
   const specialtyCount = Object.keys(data.reduce((acc, student) => {
    acc[student.İxtisas] = true;
    return acc;
  }, {})).length;

   const participantCount = data.length;

   const eventCount = events.length;


  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Universitet</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>{universityCount}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>İxtisas</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>{specialtyCount}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>İştirakçı</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{participantCount}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Təlim</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>{eventCount}</h1>
        </div>
      </div>
      
      <div className='charts'>
        <ResponsiveContainer width="100%" height={220} className="piee">
          <h3>Yaş qrupu</h3>
          <PieChart>
            <Pie
              dataKey="count"
              data={ageData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              
            >
              {ageData.map((entry, index) => (
                <Cell key={`pie-${entry.name}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={220} className="piee">
        <h3>Cins</h3>
          <PieChart>
            <Pie
              dataKey="count"
              data={genderData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              
            >
              {genderData.map((entry, index) => (
                <Cell key={`pie-${entry.name}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={220} className="piee">
        <h3>Dərəcə</h3>
  <PieChart margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
    <Pie
      dataKey="count"
      data={degreeData}
      cx="50%"
      cy="50%"
      outerRadius={100}
      fill="#8884d8"
     
    >
      {degreeData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
</ResponsiveContainer>
<ResponsiveContainer width="100%" height={220} className="piee">
<h3>İxtisas</h3>
  <RadarChart cx="50%" cy="50%" outerRadius="100%" data={specialtyData}>
    <PolarGrid />  
    <Radar name="Count" dataKey="count" stroke="#8884d8" fill="#ff6361" fillOpacity={0.5} />
    <Tooltip
      formatter={(value, name, props) => [`${props.payload.name}: ${value}`]}
    />
  </RadarChart>
</ResponsiveContainer>




      </div>
      <div  style={{ height:'500px' }}>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart
            width={300}
            height={300}
            data={universityData} 
          >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis />
            <Tooltip
      formatter={(value, name, props) => [`${props.payload.name}: ${value}`]}
    />
            <Bar dataKey="count" fill="#8884d8" shape={<TriangleBar />}>
              {universityData.map((entry, index) => (
                <Cell key={`cell-${entry.name}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
          <h3 style={{ textAlign: 'center',  paddingBottom:"70px", paddingTop:"0px"   }}>Universitetlər</h3>
        </ResponsiveContainer>
        
      </div>
    </main>
  );
}

export default Home;
