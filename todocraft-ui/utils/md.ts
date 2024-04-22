export function generateProjectMarkDown(project: ProjectWithTodo) {
  let markdown = `# ${project?.title}\n`;
  markdown += `**Summary** : ${project?.completed_todo_count} / ${project?.todos?.length} completed.\n\n`;
  markdown += `### Pending\n`;
  project.todos.forEach((todo) => {
    if (!todo.status) {
      markdown += `\n[ ] ${todo.title}\n`;
    }
  });
  markdown += `\n### Completed\n`;
  project.todos.forEach((todo) => {
    if (todo.status) {
      markdown += `\n[x] ${todo.title}\n`;
    }
  });
  return markdown;
}

export function exportMarkdown(props: ProjectWithTodo, todoMarkdown: string) {
  const blob = new Blob([todoMarkdown], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${props.title}.md`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
