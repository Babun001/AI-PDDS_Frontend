import React from 'react';
// import bgimg from '../Assets/Doctor4.jpg'

export default function info() {
  const information = [
    {
      name: 'Diabetes',
      diedperyear: 'around 983,000 deaths',
      info: "Diabetes mellitus is a chronic metabolic disorder characterized by high levels of glucose (sugar) in the blood due to either insufficient insulin production by the pancreas or the body's inability to effectively use the insulin it produces. The two main types of diabetes mellitus are Type 1 and Type 2. Type 1 diabetes is an autoimmune condition where the immune system attacks and destroys insulin-producing beta cells in the pancreas, leading to absolute insulin deficiency. It is commonly diagnosed in children and young adults. Type 2 diabetes, which accounts for the majority of diabetes cases, is primarily caused by insulin resistance, where the body's cells do not respond properly to insulin. This type is often associated with obesity, physical inactivity, and poor diet and is typically diagnosed in adults, though it is increasingly seen in younger populations due to rising obesity rates. Complications from diabetes mellitus are severe and can include cardiovascular diseases, nerve damage (neuropathy), kidney damage (nephropathy), eye damage (retinopathy), and an increased risk of infections. Effective management of diabetes involves regular monitoring of blood sugar levels, maintaining a healthy diet, engaging in regular physical activity, and, in some cases, using medications or insulin therapy. Early diagnosis and proper management are crucial in preventing or delaying these complications and improving quality of life for individuals with diabetes.",
      defend: 
      ['Emphasize a diet rich in vegetables, fruits, whole grains, lean proteins, and healthy fats. Limit sugar and refined carbohydrates.',
        'Manage portion sizes to avoid overeating, which can help maintain a healthy weight and regulate blood sugar levels.',
        'Engage in at least 150 minutes of moderate-intensity aerobic exercise per week, such as walking, cycling, or swimming. Include strength training exercises twice a week​ .',
        'Achieving and maintaining a healthy weight can significantly reduce the risk of developing Type 2 diabetes and help manage blood sugar levels in those already diagnosed​ (Wikipedia - https://en.wikipedia.org/wiki/Diabetes_in_India)​.',
        'Regularly monitor blood glucose levels to manage diabetes effectively and prevent complications. This can include home testing and periodic A1C tests to assess long-term blood sugar control​ (Our World in Data)​​ (World Health Organization - https://www.who.int/india/health-topics/diabetes)​.',
        'Regular visits to healthcare providers for comprehensive diabetes care, including monitoring for complications such as cardiovascular disease, neuropathy, and retinopathy​ (Wikipedia - https://en.wikipedia.org/wiki/Diabetes_in_India)​.'
      ]
    }
  ]
  return (
    <div className="info-container">
      <div className="bg-text">
        <h2>AI-PDDS</h2>
        <h1>Know more! Be safe!</h1>
      </div>

      {/* <div className="Heading"> */}
        {
          information.map((infos) => (
            <div className="Heading">
              <h4>{infos.name}</h4>
              <h5>Deaths per Year : <span>{infos.diedperyear}</span></h5>
              <p>{infos.info}</p>
              <h5>How to Defend</h5>
              {
                infos.defend.map((points) =>(
                  <p>{points}</p>
                ))
              }
            </div>
          ))
        }
      {/* </div> */}
    </div>
  );
}
