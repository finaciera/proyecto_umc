
import {
  FormField,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";



interface InputFieldProps {
  control: any; // Ajusta el tipo según tu configuración de React Hook Form
  name: string;
  label: string;
  ejemplo:string;
  description: string;
}

export function InputField({ control, name, label, ejemplo,description }: InputFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={ejemplo} {...field} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
