import React from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { cardStyles } from "./ReusableStyles";
import { data } from "../../dummydata";

export default function Earnings() {
  return (
    <Section>
      <div className="top">
        <div className="info">
          <h5>Your Child's Attendance Analytics</h5>
          {/* <h1>$682.5</h1> */}
          <div className="growth">
            <span>+2.45%</span>
          </div>
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <Tooltip cursor={false} />
            <Area
              animationBegin={800}
              animationDuration={2000}
              type="monotone"
              dataKey="data"
              stroke="#d3ad7f"
              fill="#888"
              strokeWidth={4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 17rem;
  border-radius: 1rem;
  ${cardStyles}
  padding: 2rem 0 0 0;
  .top {
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      h1 {
        font-size: 2rem;
      }
      .growth {
        background-color: var(--light-black);
        padding: 0.5rem;
        border-radius: 1rem;
        cursor: pointer;
        color: var(--text-color);
        transition: all var(--trans);
        &:hover {
          background-color: var(--black);
        }
        span {
          color: var(--text-color);
        }
      }
    }
  }
  .chart {
    height: 50%;
    .recharts-default-tooltip {
      background-color: black !important;
      border-color: black !important;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
  }
`;
