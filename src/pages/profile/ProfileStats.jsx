import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import HeatMap from '@uiw/react-heat-map';

const ProfileStats = ({ completedChallenges, totalChallenges, submissionData }) => {
    const completionPercentage = (completedChallenges / totalChallenges) * 100;
    
    return (
      <div className="space-y-6 ">
        <Card>
          <CardContent className="p-6 ">
            <h3 className="text-lg font-semibold mb-4">Completed challenges</h3>
            <div className="flex items-center justify-between mb-2">
              <span>Easy:</span>
              <span>{completedChallenges} / {totalChallenges}</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
            <div 
                className="h-full bg-blue-600 rounded-full" 
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </CardContent>
        </Card>
  
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Your coding strikes</h3>
            <HeatMap
              value={submissionData}
              width={320}
              height={200}
              className="w-full"
            />
          </CardContent>
        </Card>
      </div>
    );
  };

  export default ProfileStats;
  