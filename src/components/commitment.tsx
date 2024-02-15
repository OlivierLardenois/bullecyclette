import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

type CommitmentCardProps = {
  title: string;
  description: string;
  image: IGatsbyImageData;
};

const CommitmentCard: React.FC<CommitmentCardProps> = ({
  description,
  title,
  image,
}) => {
  return (
    <div className="relative flex h-60 justify-center items-center font-veteran-typewriter">
      <div className="absolute inset-0">
        <GatsbyImage image={image} alt={""} className="size-full" />
      </div>
      <div className="z-10 flex flex-col justify-center bg-white h-1/2 w-3/5 p-4 rounded-lg text-center space-y-3">
        <div className="leading-none">{title}</div>
        <div className="size-auto">
          <hr className="size-2/12 border-black border-1 mx-auto" />
        </div>
        <div className="text-xs leading-none">{description}</div>
      </div>
    </div>
  );
};

const Commitment: React.FC = () => {
  const { t } = useTranslation();

  const data = useStaticQuery<Queries.CommitmentQuery>(graphql`
    query Commitment {
      commitmentImages: allFile(
        filter: { relativeDirectory: { regex: "/commitments/" } }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(transformOptions: { cropFocus: CENTER })
          }
        }
      }
    }
  `);

  const sortedImages = data.commitmentImages.nodes.toSorted((a, b) => {
    return b.relativePath > a.relativePath ? -1 : 1;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {sortedImages.map((x, i) => (
        <CommitmentCard
          description={t(`commitment.steps.${i}.description`)}
          image={getImage(x.childImageSharp)!}
          title={t(`commitment.steps.${i}.title`)}
        />
      ))}
    </div>
  );
};

export default Commitment;
