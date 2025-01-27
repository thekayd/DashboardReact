import React from 'react'
import Card from './Card'
import { FaBox, FaCog, FaShoppingCart, FaUsers } from 'react-icons/fa'
import {dataLine, dataBar} from '../assets/chartData'
import {Line, Bar} from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, BarElement } from 'chart.js';
ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement
)

const Dashboard = () => {
  return (
    <div className="grow p-8">
        <h2 className="text-2xl mb-4">Dashboard</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
            <Card icon={<FaShoppingCart />} title="Orders" value="140"/>
            <Card icon={<FaBox />} title="Products" value="120"/>
            <Card icon={<FaUsers />} title="Users" value="30"/>
            <Card icon={<FaCog />} title="Settings" value="11"/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
                <h3>Sales Data</h3>
                <Line data={dataLine} />
            </div>
            <div>
                <h3>Inventory Data</h3>
                <Bar data={dataBar} />
            </div>

        </div>
    </div>
  )
}

export default Dashboard