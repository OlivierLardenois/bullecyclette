import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

type EventProps = {
  children: React.ReactNode;
  address?: string;
  alt: string;
  image: IGatsbyImageData;
};

const Event: React.FC<EventProps> = ({ children, address, alt, image }) => {
  return (
    <div className="relative inline-flex flex-col items-center space-y-2 bg-inherit max-w-52 text-center">
      <div className="w-10 h-10 bg-white rounded-full"></div>

      <div className="border-b pb-3">
        <GatsbyImage image={image} alt={alt} />
      </div>
      <p className="text-white">{children}</p>
      {address && (
        <p className="bg-white py-1 px-2 rounded-md max-w-40 text-cg-red font-sans">
          {address}
        </p>
      )}
    </div>
  );
};

type ScheduleProps = {
  events: EventProps[];
};

const Schedule: React.FC<ScheduleProps> = ({ events }) => {
  return (
    <div className="relative flex justify-between bg-inherit">
      <div className="absolute top-4 left-0 border-t w-full border-cg-red" />
      {events.map((event) => {
        return <Event {...event} />;
      })}
    </div>
  );
};

export default Schedule;

function customSchedule(
  scheduleName: "guinguette" | "guinguetteSmall" | "bullecyclette",
) {
  const data = useStaticQuery<Queries.GuinguetteScheduleQuery>(graphql`
    query GuinguetteSchedule {
      guinguetteScheduleImages: allFile(
        filter: {
          relativePath: {
            in: [
              "dates/1500.png"
              "dates/1800.png"
              "dates/2000.png"
              "dates/2300.png"
            ]
          }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(height: 30)
          }
        }
      }
      guinguetteSmallScheduleImages: allFile(
        filter: {
          relativePath: {
            in: ["dates/1500.png", "dates/1800.png", "dates/2300.png"]
          }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(width: 80)
          }
        }
      }
      bullecycletteScheduleImages: allFile(
        filter: {
          relativePath: {
            in: [
              "dates/830.png"
              "dates/1000.png"
              "dates/1030.png"
              "dates/1700.png"
            ]
          }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(width: 80)
          }
        }
      }
    }
  `);

  const events = scheduleEventsFormatter({
    nodes: data[`${scheduleName}ScheduleImages`].nodes,
    scheduleName:
      scheduleName === "guinguetteSmall" ? "guinguette-small" : scheduleName,
  });

  return <Schedule events={events} />;
}

function scheduleEventsFormatter({
  nodes,
  scheduleName,
}: {
  nodes: Queries.GuinguetteScheduleQuery["guinguetteScheduleImages"]["nodes"];
  scheduleName: "guinguette" | "guinguette-small" | "bullecyclette";
}) {
  const { t } = useTranslation();

  return nodes
    .reduce<Array<EventProps & { hour: number }>>(
      (acc, { childImageSharp, relativePath }) => {
        const image = getImage(childImageSharp);
        if (!image) return acc;

        const hour = parseInt(relativePath.split("/")[1].split(".")[0]);

        return acc.concat({
          children: t(`schedule.${scheduleName}.${hour}.text`),
          alt: t(`schedule.${scheduleName}.${hour}.alt`),
          image,
          hour,
          address: addressMapper({ hour, scheduleName }),
        });
      },
      [],
    )
    .sort((a, b) => {
      return a.hour - b.hour;
    });
}

function addressMapper({
  scheduleName,
  hour,
}: {
  scheduleName: "guinguette" | "guinguette-small" | "bullecyclette";
  hour: number;
}) {
  switch (scheduleName) {
    case "bullecyclette":
      if (hour === 830) return "Château Desbordes AVIZE";
      if (hour === 1700) return "Gymnase Cattani AVIZE";
      return undefined;
    case "guinguette":
    case "guinguette-small":
      if (hour === 1500) return "Gymnase Cattani AVIZE";
      return undefined;
    default:
      return undefined;
  }
}

export const GuinguetteSchedule: React.FC = () => {
  return customSchedule("guinguette");
};

export const GuinguetteSmallSchedule: React.FC = () => {
  return customSchedule("guinguetteSmall");
};

export const BullecycletteSchedule: React.FC = () => {
  return customSchedule("bullecyclette");
};
