<script>
    import { 
        description, 
        currentStep,
        resubmission,
        clarityOfExposition,
        qualityOfReferences,
        reproducibility,
        explanationOfRating,
        privateComments,
        expertise,
        rating
    } from './stores.js';
 
    import Field from './Field.svelte';
    import TextArea from './TextArea.svelte';
    import Choice from './Choice.svelte';
    import Stack from './Stack.svelte';
    import Steps from './Steps.svelte';
    import Step from './Step.svelte';
    import Overview from './Overview.svelte'
</script>

<style>
    .columns {
        display: flex;
        width: 100%;
        min-height: 100vh;
    }

    .sidebar {
        width: 18rem;
        flex-shrink: 0;
        flex-grow: 0;

        border-right: 1px solid var(--gray-400);
        background-color: var(--gray-100);
    }

    nav {
        position: sticky;
        top: 0;
        padding: var(--spacing-unit);
    }

    main {
        width: 100%;
        max-width: var(--max-width);
        flex-shrink: 1;
        flex-grow: 1;
        margin-left: auto;
        margin-right: auto;
        padding: var(--spacing-unit);
    }

    @media screen and (min-width: 1500px) {
        main {
            margin: unset;
            padding-left: var(--spacing-unit-l);
            padding-right: var(--spacing-unit-l);
        }
    }
</style>

<div class="columns">
    <div class="sidebar">
        <nav>
            Seitenleiste
        </nav>
    </div>
    <main>
        <Steps {currentStep}>

            <Step>
                <Stack space="large">
                    <Field
                    label="Description"
                    help="Briefly describe the paper and its contribution to computer graphics and interactive techniques. Please give your assessment of the scope and magnitude of the paper's contribution."
                    id="description"
                    >
                        <TextArea id="description" bind:value={$description} />
                    </Field>

                    <Field
                        label="Resubmission"
                        help="If the paper is a resubmission with reviewer continuity, please give your assessment of how the authors took into account comments from reviewers in the previous review cycle and improved their work. Note that the reviewing system gives you access to the former reviews and that the authors were instructed to upload a cover letter outlining the changes to their work as supplementary material."
                        id="resubmission"
                    >
                        <TextArea id="resubmission" bind:value={$resubmission} />
                    </Field>
                </Stack>
            </Step>

            <Step>
                <Stack space="large">
                    <Field
                        label="Clarity of Exposition"
                        help="Is the exposition clear? How could it be improved?"
                        id="expo-clarity"
                    >
                        <TextArea id="expo-clarity" bind:value={$clarityOfExposition} />
                    </Field>

                    <Field
                        label="Quality of References"
                        help="Are the references adequate? List any additional references that are needed."
                        id="ref-quality"
                    >
                        <TextArea id="ref-quality" bind:value={$qualityOfReferences}/>
                    </Field>

                    <Field
                        label="Reproducibility"
                        help="Could the work be reproduced from the information in the paper? Are all important algorithmic or system details discussed adequately? Are the limitations and drawbacks of the work clear?"
                        id="reproducibility"
                    >
                        <TextArea id="reproducibility" bind:value={$reproducibility}/>
                    </Field>
                </Stack>
            </Step>

            <Step>
                <Stack space="large">
                    <Field
                        label="Rating"
                        help="Please rate this paper. Please base your rating on the paper as it was submitted."
                        fieldset={true}
                    >
                        <Stack space="small">
                            <Choice
                                id="rating"
                                value="definitely-reject"
                                label="Definitely reject"
                                caption="I would protest strongly if it's accepted."
                                theme="strong-negative"
                                bind:group={$rating}
                            />
                            <Choice
                                id="rating"
                                value="probably-reject"
                                label="Probably reject"
                                caption="I would argue against this paper."
                                theme="negative"
                                bind:group={$rating}
                            />
                            <Choice
                                id="rating"
                                value="possibly-accept"
                                label="Possibly accept"
                                caption="But only if others champion it."
                                theme="neutral"
                                bind:group={$rating}
                            />
                            <Choice
                                id="rating"
                                value="probably-accept"
                                label="Probably accept"
                                caption="I would argue for this paper."
                                theme="positive"
                                bind:group={$rating}
                            />
                            <Choice
                                id="rating"
                                value="definitely-accept"
                                label="Definitely accept"
                                caption="I would protest strongly if it's accepted."
                                theme="strong-positive"
                                bind:group={$rating}
                            />
                        </Stack>
                    </Field>

                    <Field
                        label="Explanation of Rating"
                        help="Explain your rating by discussing the strengths and weaknesses of the submission, contributions, and the potential impact of the paper. Include suggestions for improvement and publication alternatives, if appropriate. Be thorough. Be fair. Be courteous. Be constructive. Your evaluation will be forwarded to the authors during the rebuttal period."
                        id="explanation"
                    >
                        <TextArea id="explanation" bind:value={$explanationOfRating}/>
                    </Field>
                </Stack>
            </Step>
            
            <Step>
                <Field
                    label="Reviewer Expertise"
                    help="Please rate your expertise in the subject area of the paper:"
                    fieldset={true}
                >
                    <Stack space="small">
                        <Choice value={"beginner"} label="Beginner" id="expertise" bind:group={$expertise} />
                        <Choice value={"knowledgeable"} label="Knowledgeable" id="expertise" bind:group={$expertise} />
                        <Choice value={"expert"} label="Expert" id="expertise" bind:group={$expertise} />
                    </Stack>
                </Field>
            </Step>

            <Step>
                <Field
                    label="Private Comments (Optional)"
                    help="You may enter private comments for the papers committee here. These comments will not be sent to the paper author(s). Please do not mention any other papers that are currently in review, or the names of people associated with these papers."
                    id="comments"
                >
                    <TextArea id="comments" bind:value={$privateComments}/>
                </Field>
            </Step>

            <Step>
                <Overview />
            </Step>
        </Steps>
    </main>
</div>
