// Interface for a Task : it's like a class
// export : to bring it into other files
export interface Task {
  id?: number;
  // ?: optional to get no error messages
  text: string;
  day: string;
  reminder: boolean;
}
