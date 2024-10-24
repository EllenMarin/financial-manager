import { useNewAccount } from "../hooks/use-new-account";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
//import { AccountForm, FormValues} from "@/features/accounts/components/account-form";
//import { useCreateAccount } from "@/features/accounts/api";


export const NewAccountSheet = () => {
    const { isOpen, onClose } = useNewAccount();
    //const mutation = useCreateAccount();
    //const onSubmit = (formValues: FormValues) => {
     /* mutation.mutate(formValues, {
        onSuccess: () => {
          onClose();
        },
      });
    };*/

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
          <SheetContent className="space-y-4">
            <SheetHeader>
              <SheetTitle>New Account</SheetTitle>
              <SheetDescription>
                Create a new account to track your transactions
              </SheetDescription>
            </SheetHeader>
            
          </SheetContent>
        </Sheet>
      );
    };