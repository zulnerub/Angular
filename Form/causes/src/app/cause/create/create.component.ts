import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss', '../../../error-styles.scss']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      cause: ['', [Validators.required]],
      neededAmount: [null, [Validators.required, Validators.min(101)]],
      description: ['', [Validators.required, Validators.minLength(50)]],
      imageUrl: ['', [Validators.required, Validators.pattern('^http\|https')]]
    });
  }

  ngOnInit() {
  }

  createHandler(){
    console.log(this.form.value);
    
  }

}
