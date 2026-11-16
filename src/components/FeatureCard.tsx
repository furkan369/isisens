import React from 'react';

export interface FeatureCardItem {
  id: string;
  titleLines: string[];
  description: string;
}

interface FeatureCardProps {
  item: FeatureCardItem;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ item }) => {
  return (
    <article className="isisens-feature-card rounded-[16px] xl:rounded-[18px] px-[20px] py-[22px] xl:px-[25px] xl:py-[27px] 2xl:px-[30px] 2xl:py-[31px] flex flex-col justify-start h-full min-h-[150px] xl:min-h-[182px] 2xl:min-h-[208px]">
      <h2 className="text-[19.5px] xl:text-[23.5px] 2xl:text-[26px] font-bold text-white leading-[1.24] tracking-[-0.015em] mb-[10px] xl:mb-[13px]">
        {item.titleLines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < item.titleLines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </h2>
      <p className="text-[12.6px] xl:text-[15px] 2xl:text-[16.8px] font-normal text-[#C2CCD8] leading-[1.42] max-w-[192px] xl:max-w-[235px] 2xl:max-w-[265px]">
        {item.description}
      </p>
    </article>
  );
};

export default FeatureCard;
