'use client'

import { useState } from "react";

export default function Dashboard() {

  const habits: Habit[] = [
    { id: 1, name: 'Exercise', frequency: 'Daily' },
    { id: 2, name: 'Read', frequency: 'Daily' },
    { id: 3, name: 'Meditate', frequency: 'Daily' },
  ];

  interface Habit {
    id: number;
    name: string;
    frequency: string;
  }

  const habitFormInitialState: Habit = {
    id: 0,
    name: '',
    frequency: '',
  };

  const [habitPanelOpen, setHabitPanelOpen] = useState(false);
  const [habitFormState, setHabitFormState] = useState(habitFormInitialState);

  const addHabit = () => {
    // Logic to add a new habit
    console.log('Add habit clicked');
    setHabitFormState(habitFormInitialState);
    setHabitPanelOpen(true);
  };

  const editHabit = (habitId: number) => {
    // Logic to edit an existing habit
    console.log('Edit habit clicked', habitId);
    // Populate the form with the existing habit data
    const habitToEdit = habits.find(h => h.id === habitId);
    if (habitToEdit) {
      setHabitFormState(habitToEdit);
    }
    setHabitPanelOpen(true);
  }

  const saveHabit = () => {
    // Logic to save the habit (either new or edited)
    console.log('Save habit clicked', habitFormState);
    setHabitPanelOpen(false);
  }

  return (
    <div className="container mx-auto px-4 flex flex-col justify-center items-center h-screen">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4 w-200">Dashboard</h1>
            <div className="flex">
                {/* <div className="bg-white p-2 rounded-lg shadow">Profile</div> */}
                <div className="bg-white p-2 rounded-lg shadow ml-4">
                  <div>
                    {habits.map((habit) => (
                      <div key={habit.id} className="mb-2 p-2 border rounded cursor-pointer hover:bg-gray-100" onClick={() => editHabit(habit.id)}>
                        <h2 className="text-lg font-semibold">{habit.name}</h2>
                        <p className="text-sm text-gray-600">{habit.frequency}</p>
                      </div>
                    ))}
                    <div 
                      className="mb-2 p-2 text-center border rounded bg-blue-100 cursor-pointer hover:bg-blue-200" 
                      onClick={addHabit}
                    >
                      Add
                    </div>
                  </div>
                </div>
                {
                  habitPanelOpen && (
                    <div className="bg-white p-2 rounded-lg shadow ml-4">
                      <h2 className="text-lg font-semibold mb-2">Habit Panel</h2>
                      <p>This is where you can add or edit habits.</p>
                      <input type="text" placeholder="Habit name" className="border p-2 rounded w-full mb-2" value={habitFormState.name} onChange={(e) => setHabitFormState({ ...habitFormState, name: e.target.value })} />
                      <input type="text" placeholder="Frequency" className="border p-2 rounded w-full mb-2" value={habitFormState.frequency} onChange={(e) => setHabitFormState({ ...habitFormState, frequency: e.target.value })} />
                      <button className="mt-2 bg-blue-500 text-white p-2 rounded" onClick={saveHabit}>Save</button>
                    </div>
                  )
                }
            </div>
        </div>
    </div>
  );
}