import React from 'react'
import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

import { Vote } from '@/types/vote'
import { tShirts } from '@/utils/pointing-scale'
import { Button } from '@/components/button'

import styles from './styles.module.scss'
import { RefreshCcw } from 'lucide-react'

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

type VoteResultProps = {
  votes: Vote[]
  onRedoVotes: () => void
}

export function VoteResult({ votes, onRedoVotes }: VoteResultProps) {
  const votesByValue = tShirts.reduce((acc, shirt) => {
    const count = votes.filter((vote) => vote.value === shirt).length
    acc[shirt] = count

    return acc
  }, {} as any)

  const series = [
    {
      name: 'Número de votos',
      data: Object.values(votesByValue) as number[],
    },
  ]

  return (
    <div>
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
