import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-score',
  templateUrl: './student-score.component.html',
  styleUrls: ['./student-score.component.scss'],
})
export class StudentScoreComponent {
  assessments = [
    [
      { name: 'Мат. для комп. наук', type: 'Экзамен', score: 4.7 },
      { name: 'Программирование основы 1', type: 'Экзамен', score: 5 },
      { name: 'Дискретная математика', type: 'Диф. зачёт', score: 4.3 },
      { name: 'История', type: 'Зачёт', score: 1 },
    ],
    [
      { name: 'Программирование основы 2', type: 'Экзамен', score: 5 },
      { name: 'Философия', type: 'Диф. зачёт', score: 3.3 },
      { name: 'Мат. анализ', type: 'Экзамен', score: 2.7 },
      { name: 'Теория вероятностей', type: 'Диф. зачёт', score: 4.3 },
    ],
    [
      { name: 'Мат. для комп. наук', type: 'Экзамен', score: 4.7 },
      { name: 'Программирование основы 1', type: 'Экзамен', score: 5 },
      { name: 'Дискретная математика', type: 'Диф. зачёт', score: 4.3 },
      { name: 'История', type: 'Зачёт', score: 1 },
    ],
    [
      { name: 'Программирование основы 2', type: 'Экзамен', score: 5 },
      { name: 'Философия', type: 'Диф. зачёт', score: 3.3 },
      { name: 'Мат. анализ', type: 'Экзамен', score: 2.7 },
      { name: 'Теория вероятностей', type: 'Диф. зачёт', score: 4.3 },
    ],
  ];
  semester = 1;

  handlePreviousSemester(): void {
    this.semester = Math.max(this.semester - 1, 1);
  }

  handleNextSemester(): void {
    this.semester = Math.min(this.semester + 1, this.assessments.length);
  }
}
