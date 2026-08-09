const Store = {
  key: 'fitforge_v3',
  defaults() {
    return {
      goals: { calories: 2200, protein: 180, carbs: 220, fat: 65, goalWeight: 170, waterGoal: 80 },
      profile: {},
      bodyEntries: [],
      foodEntries: [],
      customFoods: [],
      myMeals: [],
      mealPlan: [],
      water: {},
      favorites: { recipes: [], exercises: [] },
      routines: [],
      workoutLogs: [],
      achievements: {},
      shoppingChecked: [],
      userProfile: { name: '', level: 'Beginner', diet: 'none', equipment: 'gym', targetDate: '' },
      settings: { language: 'en', units: 'lb', heightUnits: 'ft', theme: 'light' }
    };
  },
  load() {
    const d = this.defaults();
    try {
      const x = JSON.parse(localStorage.getItem(this.key) || '{}');
      return {
        ...d, ...x,
        goals: { ...d.goals, ...(x.goals || {}) },
        profile: x.profile || {},
        bodyEntries: x.bodyEntries || [],
        foodEntries: x.foodEntries || [],
        customFoods: x.customFoods || [],
        myMeals: x.myMeals || [],
        mealPlan: x.mealPlan || [],
        water: x.water || {},
        favorites: { ...d.favorites, ...(x.favorites || {}) },
        routines: x.routines || [],
        workoutLogs: x.workoutLogs || [],
        achievements: x.achievements || {},
        shoppingChecked: x.shoppingChecked || [],
        userProfile: { ...d.userProfile, ...(x.userProfile || {}) },
        settings: { ...d.settings, ...(x.settings || {}) }
      };
    } catch {
      return d;
    }
  },
  save(s) {
    localStorage.setItem(this.key, JSON.stringify(s));
  }
};
