import { useRouter } from "next/router";


export default function RecipePage() {
    const router = useRouter();
    const {
        query: { id },
      } = router;
    return (
        <div className="containerRecipe">
            je suis dans la page de la recette n°{id}
        </div>
    )
}