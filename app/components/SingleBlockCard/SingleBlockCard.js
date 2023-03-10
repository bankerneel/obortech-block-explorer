import React from 'react';
import { Card, Icon, Avatar, Tag } from '@shopify/polaris';
import TimeAgo from 'timeago-react';
import logo from '../../assets/images/logo.png';

import TextWithEllipses from '../TextWithEllipses/TextWithEllipses';

const LabelWithValue = ({ label, value }) => (
  <div>
    <span
      style={{
        color: 'rgb(0, 0, 0)',
        width: 'auto',
        display: 'inline-block',
        fontWeight: 'bolder',
        marginRight: '5px',
      }}
    >
      {`${label}:`}
    </span>
    <span
      style={{
        color: 'rgb(93, 106, 133)',
      }}
    >
      {value}
    </span>
  </div>
);

const SingleBlockCard = ({
  onClick,
  blockHash,
  blockNumber,
  channelName,
  totalTxs,
  timeStamp,
}) => {
  return (
    <Card>
      <div
        style={{
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          cursor: 'pointer',
        }}
        onClick={onClick}
      >
        <div style={{ width: '10%', justifyContent: ' center' }}>
          <img src={logo} alt="logo" style={{ width: 32, height: 32 }} />
        </div>

        <div
          style={{
            display: 'inline-block',
            width: '25%',
            justifyContent: ' center',
          }}
        >
          <div>
            <span
              style={{
                color: 'rgb(93, 106, 133)',
                display: 'inline-block',
              }}
            >
              <TextWithEllipses text={blockHash} />
            </span>
          </div>
          <div>
            <LabelWithValue label="Block No" value={blockNumber} />

            {/* <span style={{ color: 'rgb(0, 0, 0)' }}>{blockNumber}</span> */}
          </div>
        </div>

        <div
          style={{
            display: 'inline-block',
            width: '40%',
            justifyContent: ' center',
          }}
        >
          <LabelWithValue label="Channel Name" value={channelName} />
          <LabelWithValue label="Total txs" value={totalTxs} />
        </div>

        <div
          style={{
            display: 'flex',
            height: '40px',
            alignItems: 'center',
            fontWeight: 'bolder',
            width: '25%',
            justifyContent: ' center',
          }}
        >
          <Tag>
            <TimeAgo datetime={timeStamp} />
          </Tag>
        </div>
      </div>
    </Card>
  );
};

export default SingleBlockCard;
