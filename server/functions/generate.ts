export const generatePair = (
    students: any,
    allThePairs: any
  ) => {
    try {
        console.log("student",students);
        console.log("🚀 just verifying file: generate.ts:8 just verifying allThePairs:", allThePairs)
        
        
        // Create an array to store the remaining students to pair
        const remainingStudents = [...students];
      
        // Create an array to store the new pairs
        const newPairs:any = [];
      // Helper function to check if a pair exists
const pairExists = (pair:any, existingPairs:any) => {
    for (const existingPair of existingPairs) {
      if (
        existingPair[0] && existingPair[0].id === pair[0].id &&
        existingPair[1] && existingPair[1].id === pair[1].id
      ) {
        return true; // Pair already exists
      }
    }
    return false; // Pair does not exist
  };
  
      
        // Generate new pairs
        while (remainingStudents.length >= 2) {
          const randomIndex1 = Math.floor(Math.random() * remainingStudents.length);
          const student1 = remainingStudents[randomIndex1];
          remainingStudents.splice(randomIndex1, 1);
      
          const randomIndex2 = Math.floor(Math.random() * remainingStudents.length);
          const student2 = remainingStudents[randomIndex2];
          remainingStudents.splice(randomIndex2, 1);
      
          const newPair = [
            {
              firstName: student1.firstName,
              lastName: student1.lastName,
              id: student1.id,
            },
            {
              firstName: student2.firstName,
              lastName: student2.lastName,
              id: student2.id,
            },
          ];
      
          if (!pairExists(newPair, allThePairs) && !pairExists(newPair, newPairs)) {
            newPairs.push(newPair);
          }
        }
      
        return newPairs;
    } catch (error) {
     console.log(error);
        
    }
  };
  