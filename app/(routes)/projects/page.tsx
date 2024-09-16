import ProjectCard from "@/components/project-card";

const ProjectPage = () => {
	return (
		<div className="my-16 mx-8 ">
			<section className="space-y-4 pb-7">
				<div className="text-3xl font-ttsupermolot-bold">
					Meus
				</div>
				<div className="text-6xl font-extrabold">
					Projetos
				</div>
			</section>
			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
					<ProjectCard
						title = "Sistema Pedagógico"
						technologies = "Java, MySQL"
						description = "Este sistema foi desenvolvido para que se possa cadastrar alunos, professores, cursos, módulos e cronogramas. Contendo várias ferramentas, bem como acesso separado para admnistradores."
						image = "/library.jpg"
						href = "https://github.com/Varani07/Setor_Pedagogico"
					/>
					<ProjectCard
						title = "CRUD Pessoas"
						technologies = "Python, MySQL"
						description = "Feito com o básico de Python, tem como funcionalidade o cadastro de pessaoas e seus endereços, sendo um deles obrigatóriamente seu principal, assim como ferramentas para pesquisa de dados."
						image = "/microsservices.png"
						href = "https://github.com/Varani07/exercicio_crud_python"
					/>
					<ProjectCard
						title = "CRUD Alunos"
						technologies = "Python, MySQL"
						description = "Efetua o cadastro de alunos, professores, turmas e cursos. Este projeto foi feito visando a reutilização de código, sendo essa uma de suas características mais fortes."
						image = "/microsservices.png"
						href = "https://github.com/Varani07/crud_alunos"
					/>
			</section>
		</div>
	)
}

export default ProjectPage;