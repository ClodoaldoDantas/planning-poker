import React from 'react'
import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import { RefreshCcw } from 'lucide-react'

import { Vote } from '@/types/vote'
import { tShirts } from '@/utils/pointing-scale'
import { Button } from '@/components/button'

import styles from './styles.module.scss'

type VoteResultProps = {
  votes: Vote[]
  onRedoVotes: () => void
}

type VotesByValue = {
  [key: string]: number
}

type UserVotes = {
  [key: string]: string[]
}

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  colors: ['#3b82f6'],
  tooltip: {
    style: {
      fontFamily: 'inherit',
    },
  },
  grid: {
    strokeDashArray: 4,
    borderColor: '#e5e7eb',
  },
  yaxis: {
    show: false,
  },
  xaxis: {
    categories: tShirts,
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        fontFamily: 'inherit',
        colors: '#6b7280',
      },
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      borderRadius: 10,
    },
  },
  dataLabels: {
    enabled: false,
  },
}

export function VoteResult({ votes, onRedoVotes }: VoteResultProps) {
  const votesByValue = tShirts.reduce((acc, shirt) => {
    const count = votes.filter((vote) => vote.value === shirt).length
    acc[shirt] = count

    return acc
  }, {} as VotesByValue)

  const userVotes = tShirts.reduce((acc, value) => {
    const items = votes
      .filter((vote) => vote.value === value)
      .map((vote) => vote.userName)

    if (items.length > 0) {
      acc[value] = [...items]
    }

    return acc
  }, {} as UserVotes)

  const series = [
    {
      name: 'Número de votos',
      data: Object.values(votesByValue),
    },
  ]

  return (
    <div>
      <div className={styles.userVotes}>
        {Object.entries(userVotes).map(([key, value]) => (
          <div className={styles.userVotesItem} key={key}>
            <span>{key}</span>

            <ul className={styles.userVotesItemList}>
              {value.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Chart
        type="bar"
        options={options}
        series={series}
        height={300}
        width="100%"
      />

      <Button onClick={onRedoVotes} variant="dark" className={styles.remake}>
        <RefreshCcw size={20} />
        Refazer
      </Button>
    </div>
  )
}
