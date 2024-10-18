declare module "react-hook-form" {
  import * as React from "react";

  export interface FieldValues {
    [key: string]: any;
  }

  export type FieldPath<TFieldValues extends FieldValues> = string | number;

  export interface ControllerProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
  > {
    name: TName;
    control: any;
    render: (props: any) => JSX.Element;
  }

  export function useForm<TFieldValues extends FieldValues = FieldValues>(
    params?: any
  ): any;
  export const Controller: React.FC<ControllerProps>;

  export const FormProvider: React.FC<any>;
  export const useFormContext: () => any;
}
