import React from 'react';
import ProfileForm from './ProfileForm';
import Navbar from '../../_components/Navbar';
import ProfileStats from './ProfileStats';
import { Card, CardContent } from '@/components/ui/card';

const Profile = () => {
    // Sample data - replace with actual data from your backend
    const sampleUser = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      bio: 'text...',
      rank: 'rank',
      avatar: null
    };
  
    const sampleStats = {
      completedChallenges: 60,
      totalChallenges: 100,
      submissionData: [
        { date: '2024-01-01', count: 2 },
        { date: '2024-01-15', count: 5 },
        { date: '2024-02-01', count: 8 }
      ]
    };
  
    const handleProfileUpdate = (formData) => {
      console.log('Profile update:', formData);
      // Handle form submission here
    };
  
    return (
        <>
        <Navbar />
      <div className="h-screen max-w-7xl mx-auto px-4 py-8 bg-light-MainBg dark:bg-dark-MainBg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardContent className="p-6">
                <ProfileForm 
                  user={sampleUser} 
                  onSubmit={handleProfileUpdate}
                />
              </CardContent>
            </Card>
          </div>
          <div>
            <ProfileStats 
              completedChallenges={sampleStats.completedChallenges}
              totalChallenges={sampleStats.totalChallenges}
              submissionData={sampleStats.submissionData}
            />
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default Profile;